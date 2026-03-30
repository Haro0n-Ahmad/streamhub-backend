import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0c0f14] text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#36f3c9,transparent_62%)] blur-2xl opacity-70 animate-float" />
      <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_40%_40%,#7aa2ff,transparent_60%)] blur-3xl opacity-70 animate-float" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[70vw] bg-[radial-gradient(circle_at_50%_0%,rgba(255,122,80,0.55),transparent_65%)] blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 lg:flex-row lg:items-stretch">
        <section className="flex w-full flex-1 flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              StreamHub Social
            </div>
            <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Welcome back to the community
            </h1>
            <p className="text-base text-white/70 sm:text-lg">
              A clean, curated space for creators and friends to share clips, reactions, and moments in real time.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Live rooms</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Smart feeds</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Creator tools</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Watch parties</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Verified profiles</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Shorts studio</div>
          </div>
        </section>

        <section className="w-full max-w-xl flex-1">
          <div className="relative rounded-3xl border border-white/15 bg-[#121823] p-8 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#36f3c9] via-[#7aa2ff] to-[#ff7a50]" />

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Sign in</p>
              <h2 className="font-display text-3xl">Log in to StreamHub</h2>
              <p className="text-sm text-white/60">
                Use your handle or email to jump back in.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="login-id">
                  Username or email
                </label>
                <input
                  id="login-id"
                  name="loginId"
                  type="text"
                  autoComplete="username"
                  placeholder="@haroon or you@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#7aa2ff]/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Your secret passcode"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#36f3c9]/40"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-white/60">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent" />
                  Keep me signed in
                </label>
                <button type="button" className="text-white/70 transition hover:text-white">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0c0f14] transition hover:scale-[1.01]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#36f3c9] via-[#7aa2ff] to-[#ff7a50] opacity-0 transition group-hover:opacity-100" />
                <span className="relative">Log in</span>
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
              <span className="h-px flex-1 bg-white/10" />
              or
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30">
                Continue with Google
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30">
                Continue with Apple
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-white/60">
              New here? <span className="text-white">Create an account</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
