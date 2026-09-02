import { useEffect, useState } from "react";

const style = {
  page: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    background: "radial-gradient(900px 400px at 50% -10%, rgba(34,211,238,.15), transparent 60%), #0b0f14",
    color: "#e6edf3",
    fontFamily: "'Apple SD Gothic Neo', Pretendard, sans-serif",
  },
  badge: {
    padding: "6px 16px",
    borderRadius: 999,
    border: "1px solid rgba(34,211,238,.4)",
    color: "#22d3ee",
    background: "rgba(34,211,238,.08)",
    fontSize: 14,
  },
  h1: { fontSize: 42, margin: 0, letterSpacing: "-0.02em" },
  clock: { fontFamily: "ui-monospace, monospace", color: "#8b98a5", fontSize: 15 },
  count: {
    marginTop: 8,
    padding: "10px 22px",
    borderRadius: 10,
    border: "1px solid #1f2937",
    background: "#121820",
    color: "#e6edf3",
    fontSize: 15,
    cursor: "pointer",
  },
  revision: {
    margin: 0,
    padding: "10px 24px",
    borderRadius: 10,
    // 세 번째 수정: 초록 → 앰버로 바꿔 재배포가 눈에 바로 보이게
    background: "rgba(251,191,36,.12)",
    border: "1px solid rgba(251,191,36,.5)",
    color: "#fbbf24",
    fontSize: 20,
    fontWeight: 700,
  },
  note: {
    margin: 0,
    color: "#8b98a5",
    fontSize: 13.5,
  },
};

export default function App() {
  const [now, setNow] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={style.page}>
      <span style={style.badge}>AX Deploy · MVP e2e</span>
      <h1 style={style.h1}>🚀 victoree 디플로이 포탈 테스트 중</h1>
      <p style={style.revision}>🎉 세 번째 수정 반영</p>
      <p style={style.note}>재배포하면 이 화면이 바뀝니다 — 롤백하면 두 번째 버전으로 돌아가요</p>
      <p style={style.clock}>{now.toLocaleString("ko-KR")} — React가 살아있다는 증거</p>
      <button style={style.count} onClick={() => setCount((c) => c + 1)}>
        클릭 {count}번 — 상태도 동작
      </button>
    </div>
  );
}
