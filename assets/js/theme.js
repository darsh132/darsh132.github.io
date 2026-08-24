const STORE_THEME = {
    name: "darshan-corporate",

    primary: "#0f172a",
    secondary: "#334155",
    accent: "#2563eb",
    neutral: "#111827",

    base100: "#ffffff",
    base200: "#f8fafc",
    base300: "#e2e8f0",

    info: "#0284c7",
    success: "#059669",
    warning: "#d97706",
    error: "#dc2626"
};

document.documentElement.dataset.theme =
    STORE_THEME.name;