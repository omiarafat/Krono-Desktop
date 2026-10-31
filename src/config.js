// All tunable rules live here (see FINAL_DECISIONS.md).
export const CONFIG = {
  API_MODE: 'mock',                          // tasks / attendance data: 'mock' until those stages are built
  AUTH_MODE: 'live',                         // 'live' = real account from the website database | 'mock' = fake local login (no server)
  API_BASE: 'http://localhost/krono/public/api', // = WEBSITE_URL + /api  (Laragon; https in production)
  HEARTBEAT_S: 15,
  PING_FAILS_BEFORE_OFFLINE: 3,
  IDLE_WARNING_S: 10,                       // 3 min: warning 180
  IDLE_STOP_S: 12,                          // 5 min: timers stop (2 min after the warning; was 120 = before the warning) 300
  RESUME_WINDOW_MIN: 30,                     // offline Resume auto-start window
  WEBSITE_URL: 'http://localhost/krono/public', // Laragon; real domain later
  TOAST_SECONDS: 10,                         // message lifetime (pauses on hover)
  WORKSPACE_TZ: 'Asia/Dhaka',                // defines "day" for draft rule
};
