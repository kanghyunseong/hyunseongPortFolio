import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "kanghyunseong";
const USER_API = `https://api.github.com/users/${GITHUB_USERNAME}`;
const REPOS_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`;
const EVENTS_API = `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=30`;
const STARRED_API = `https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=5`;

const GithubOverview = () => {
  const [summary, setSummary] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [activity, setActivity] = useState([]);
  const [starred, setStarred] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes, eventsRes, starredRes] = await Promise.all([
          fetch(USER_API),
          fetch(REPOS_API),
          fetch(EVENTS_API),
          fetch(STARRED_API),
        ]);

        if (!userRes.ok || !reposRes.ok || !eventsRes.ok || !starredRes.ok) {
          throw new Error("GitHub API 응답이 올바르지 않습니다.");
        }

        const [user, repos, events, starredData] = await Promise.all([
          userRes.json(),
          reposRes.json(),
          eventsRes.json(),
          starredRes.json(),
        ]);

        const totalStars = repos.reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0
        );

        const langMap = {};
        repos.forEach((repo) => {
          if (!repo.language) return;
          langMap[repo.language] = (langMap[repo.language] || 0) + 1;
        });

        const entries = Object.entries(langMap);
        const totalCount = entries.reduce((sum, [, count]) => sum + count, 0);
        const langList = entries
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            count,
            percent: totalCount ? Math.round((count / totalCount) * 100) : 0,
          }));

        const activityItems = [];
        for (const event of events) {
          const type = event.type;
          const createdAt = event.created_at;
          const repoName = event.repo?.name;
          let label = "";
          let url = `https://github.com/${repoName}`;

          if (type === "PushEvent") {
            const commitCount = event.payload?.commits?.length || 0;
            const firstMessage =
              event.payload?.commits?.[0]?.message || "커밋";
            label =
              commitCount > 1
                ? `${commitCount} commits pushed: ${firstMessage}`
                : `commit pushed: ${firstMessage}`;
            url = `https://github.com/${repoName}/commits`;
          } else if (type === "IssuesEvent") {
            const action = event.payload?.action;
            const issue = event.payload?.issue;
            if (!issue) continue;
            label = `Issue ${action}: ${issue.title}`;
            url = issue.html_url;
          } else if (type === "PullRequestEvent") {
            const action = event.payload?.action;
            const pr = event.payload?.pull_request;
            if (!pr) continue;
            label = `PR ${action}: ${pr.title}`;
            url = pr.html_url;
          } else {
            continue;
          }

          activityItems.push({
            id: event.id,
            type,
            repo: repoName,
            label,
            date: createdAt,
            url,
          });

          if (activityItems.length >= 6) break;
        }

        const starredItems = (starredData || []).slice(0, 5).map((repo) => ({
          id: repo.id,
          fullName: repo.full_name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
        }));

        setSummary({
          followers: user.followers,
          repos: user.public_repos,
          stars: totalStars,
        });
        setLanguages(langList);
        setActivity(activityItems);
        setStarred(starredItems);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <p style={{ textAlign: "center", color: "#64748b" }}>
        GitHub 정보를 불러오는 중입니다...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ textAlign: "center", color: "#ef4444", fontSize: "0.9rem" }}>
        GitHub 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* 요약 스탯 카드 */}
      {summary && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: "16px 18px",
              borderRadius: 16,
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
            }}
          >
            <div
              style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: 4 }}
            >
              Public Repos
            </div>
            <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              {summary.repos}
            </div>
          </div>

          <div
            style={{
              padding: "16px 18px",
              borderRadius: 16,
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
            }}
          >
            <div
              style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: 4 }}
            >
              Followers
            </div>
            <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              {summary.followers}
            </div>
          </div>

          <div
            style={{
              padding: "16px 18px",
              borderRadius: 16,
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
            }}
          >
            <div
              style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: 4 }}
            >
              Total Stars
            </div>
            <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              {summary.stars}
            </div>
          </div>
        </div>
      )}

      {/* 언어 비율 바 차트 */}
      {languages.length > 0 && (
        <div
          style={{
            marginTop: 8,
            padding: "18px 18px 20px",
            borderRadius: 18,
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              marginBottom: 12,
              color: "#0f172a",
            }}
          >
            Language Usage (Top 5)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {languages.map((lang) => (
              <div key={lang.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.8rem",
                    marginBottom: 4,
                    color: "#64748b",
                  }}
                >
                  <span>{lang.name}</span>
                  <span>{lang.percent}%</span>
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: "#e5e7eb",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${Math.max(lang.percent, 8)}%`,
                      maxWidth: "100%",
                      height: "100%",
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg,#ff6b6b,#ff8e53,#f97316)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 최근 활동 타임라인 */}
      {activity.length > 0 && (
        <div
          style={{
            marginTop: 8,
            padding: "18px 18px 20px",
            borderRadius: 18,
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              marginBottom: 12,
              color: "#0f172a",
            }}
          >
            Recent Activity
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {activity.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "0.85rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#94a3b8",
                    marginBottom: 2,
                  }}
                >
                  <span>{item.repo}</span>
                  <span>
                    {new Date(item.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </span>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2563eb", fontWeight: 600 }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recently Starred */}
      {starred.length > 0 && (
        <div
          style={{
            marginTop: 8,
            padding: "18px 18px 20px",
            borderRadius: 18,
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              marginBottom: 12,
              color: "#0f172a",
            }}
          >
            Recently Starred
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {starred.map((repo) => (
              <li
                key={repo.id}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "0.85rem",
                }}
              >
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2563eb", fontWeight: 600 }}
                >
                  {repo.fullName}
                </a>
                {repo.description && (
                  <p
                    style={{
                      margin: "2px 0",
                      color: "#64748b",
                      fontSize: "0.8rem",
                    }}
                  >
                    {repo.description}
                  </p>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#94a3b8",
                    fontSize: "0.75rem",
                    marginTop: 2,
                  }}
                >
                  <span>{repo.language || "언어 정보 없음"}</span>
                  <span>★ {repo.stars}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* GitHub 커밋 히트맵 이미지 */}
      <div
        style={{
          marginTop: 8,
          borderRadius: 24,
          padding: "24px 16px 32px",
          background:
            "linear-gradient(135deg, rgba(157,80,187,0.06), rgba(255,107,107,0.03))",
          boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
        }}
      >
        <img
          src="https://ghchart.rshah.org/FF6B6B/kanghyunseong"
          alt="GitHub Contributions Chart"
          style={{
            width: "100%",
            maxWidth: 720,
            display: "block",
            margin: "0 auto",
          }}
        />
        <p
          style={{
            textAlign: "center",
            marginTop: 12,
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          최근 1년간 GitHub 커밋 히트맵입니다. (서비스: ghchart.rshah.org)
        </p>
      </div>
    </div>
  );
};

export default GithubOverview;

