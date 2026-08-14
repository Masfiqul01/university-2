import Link from "next/link";

interface BeginYourJourneyProps {
    className?: string;
}

/* =========================================================
   PROFESSIONAL SVG ICONS
========================================================= */

function ArrowRightIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px] shrink-0"
            aria-hidden="true"
        >
            <path
                d="M4 12H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[17px] w-[17px] shrink-0"
            aria-hidden="true"
        >
            <path
                d="M7.5 4.5L13 10L7.5 15.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* Premium sparkle / star mark */
function SparkleIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
        >
            <path
                d="M12 2.75L13.15 8.85L19.25 10L13.15 11.15L12 17.25L10.85 11.15L4.75 10L10.85 8.85L12 2.75Z"
                fill="currentColor"
            />
            <path
                d="M19 15.25L19.45 17.55L21.75 18L19.45 18.45L19 20.75L18.55 18.45L16.25 18L18.55 17.55L19 15.25Z"
                fill="currentColor"
                opacity="0.72"
            />
        </svg>
    );
}

/* Professional decorative education-style SVG */
function JourneyMark() {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            aria-hidden="true"
        >
            <path
                d="M8 25.2L32 13L56 25.2L32 37.5L8 25.2Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                d="M17 30V39.2C17 42.8 23.7 47.2 32 47.2C40.3 47.2 47 42.8 47 39.2V30"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />

            <path
                d="M56 25.5V38"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />

            <circle
                cx="56"
                cy="40.5"
                r="2"
                fill="currentColor"
            />

            <path
                d="M27 10.5C28.4 9.2 30.1 8.5 32 8.5C33.9 8.5 35.6 9.2 37 10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}

export function BeginYourJourney({
    className = "",
}: BeginYourJourneyProps) {
    return (
        <section
            className={`relative isolate w-full overflow-hidden bg-white ${className}`}
            aria-labelledby="journey-heading"
        >
            {/* =========================================================
                BACKGROUND ATMOSPHERE
            ========================================================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <div
                    className="
                        absolute
                        -left-[180px]
                        -top-[180px]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-[#0D0357]/[0.035]
                        blur-[100px]
                        sm:h-[520px]
                        sm:w-[520px]
                    "
                />

                <div
                    className="
                        absolute
                        -right-[160px]
                        -top-[80px]
                        h-[380px]
                        w-[380px]
                        rounded-full
                        bg-amber-300/[0.055]
                        blur-[100px]
                        sm:h-[480px]
                        sm:w-[480px]
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-[220px]
                        left-1/2
                        h-[400px]
                        w-[600px]
                        -translate-x-1/2
                        rounded-full
                        bg-indigo-200/[0.06]
                        blur-[110px]
                    "
                />

                {/* Professional SVG grid instead of CSS grid */}
                <svg
                    className="absolute inset-0 h-full w-full opacity-[0.025]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="outer-grid"
                            width="52"
                            height="52"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M52 0H0V52"
                                fill="none"
                                stroke="#0D0357"
                                strokeWidth="0.7"
                            />
                        </pattern>
                    </defs>

                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#outer-grid)"
                    />
                </svg>
            </div>

            {/* =========================================================
                CONTAINER
            ========================================================= */}
            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1580px]
                    px-3
                    py-5
                    sm:px-5
                    sm:py-7
                    md:px-6
                    lg:px-8
                    lg:py-9
                    xl:px-10
                "
            >
                {/* =====================================================
                    MAIN CTA
                ===================================================== */}
                <div
                    className="
                        group
                        relative
                        isolate
                        w-full
                        overflow-hidden
                        rounded-[22px]
                        border
                        border-white/[0.08]
                        bg-[#0D0357]
                        shadow-[0_24px_70px_rgba(13,3,87,0.14)]
                        sm:rounded-[26px]
                        lg:rounded-[30px]
                    "
                >
                    {/* =================================================
                        PANEL BACKGROUND
                    ================================================= */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-[#180a70]
                                via-[#0D0357]
                                to-[#080238]
                            "
                        />

                        <div
                            className="
                                absolute
                                -right-[120px]
                                -top-[170px]
                                h-[360px]
                                w-[360px]
                                rounded-full
                                bg-amber-400/[0.075]
                                blur-[95px]
                                transition-transform
                                duration-1000
                                group-hover:scale-110
                                sm:h-[440px]
                                sm:w-[440px]
                            "
                        />

                        <div
                            className="
                                absolute
                                -bottom-[190px]
                                left-[38%]
                                h-[340px]
                                w-[460px]
                                rounded-full
                                bg-indigo-400/[0.055]
                                blur-[100px]
                            "
                        />

                        {/* Professional SVG panel grid */}
                        <svg
                            className="absolute inset-0 h-full w-full opacity-[0.035]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="panel-grid"
                                    width="44"
                                    height="44"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M44 0H0V44"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="0.7"
                                    />
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        fill="white"
                                    />
                                </pattern>
                            </defs>

                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#panel-grid)"
                            />
                        </svg>

                        {/* Premium top highlight SVG */}
                        <svg
                            className="absolute left-[8%] right-[8%] top-0 h-8 w-[84%]"
                            viewBox="0 0 1000 32"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    id="top-highlight"
                                    x1="0"
                                    y1="0"
                                    x2="1"
                                    y2="0"
                                >
                                    <stop
                                        offset="0"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                    <stop
                                        offset="0.5"
                                        stopColor="white"
                                        stopOpacity="0.16"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>

                            <path
                                d="M0 1H1000"
                                stroke="url(#top-highlight)"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>

                    {/* =================================================
                        DECORATIVE PROFESSIONAL MARK
                    ================================================= */}
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            right-6
                            top-5
                            hidden
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/[0.1]
                            bg-white/[0.045]
                            text-amber-200
                            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                            backdrop-blur-md
                            sm:flex
                            lg:right-9
                            lg:top-7
                        "
                    >
                        <JourneyMark />

                        {/* Tiny accent dot */}
                        <span
                            className="
                                absolute
                                right-2
                                top-2
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-amber-300
                                shadow-[0_0_10px_rgba(252,211,77,0.8)]
                            "
                        />
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}
                    <div
                        className="
                            relative
                            flex
                            min-h-[176px]
                            w-full
                            flex-col
                            justify-center
                            gap-7
                            px-6
                            py-7
                            sm:min-h-[190px]
                            sm:px-9
                            sm:py-8
                            md:min-h-[200px]
                            md:flex-row
                            md:items-center
                            md:justify-between
                            md:gap-10
                            md:px-12
                            md:py-8
                            lg:min-h-[208px]
                            lg:px-16
                            lg:py-9
                            xl:px-20
                            2xl:px-24
                        "
                    >
                        {/* =================================================
                            LEFT — HEADING
                        ================================================= */}
                        <div className="relative min-w-0 flex-1">
                            {/* Small professional eyebrow */}
                            <div
                                className="
                                    mb-3
                                    flex
                                    items-center
                                    gap-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-amber-200/80
                                    sm:mb-3.5
                                    sm:text-[11px]
                                "
                            >
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/[0.06]">
                                    <SparkleIcon />
                                </span>

                                <span>Start something meaningful</span>
                            </div>

                            <h2
                                id="journey-heading"
                                className="
                                    max-w-[720px]
                                    font-extrabold
                                    leading-[0.96]
                                    tracking-[-0.045em]
                                "
                            >
                                <span
                                    className="
                                        block
                                        text-[1.35rem]
                                        text-white/45
                                        min-[375px]:text-[1.45rem]
                                        sm:text-[1.7rem]
                                        md:text-[1.9rem]
                                        lg:text-[2.1rem]
                                        xl:text-[2.3rem]
                                    "
                                >
                                    Begin your journey.
                                </span>

                                <span
                                    className="
                                        mt-1
                                        block
                                        bg-gradient-to-r
                                        from-white
                                        via-white
                                        to-amber-100
                                        bg-clip-text
                                        text-[2.35rem]
                                        text-transparent
                                        min-[375px]:text-[2.55rem]
                                        sm:text-[3.05rem]
                                        md:text-[3.35rem]
                                        lg:text-[3.7rem]
                                        xl:text-[4rem]
                                    "
                                >
                                    Shape the future.
                                </span>
                            </h2>
                        </div>

                        {/* =================================================
                            RIGHT — BUTTONS
                        ================================================= */}
                        <div
                            className="
                                flex
                                w-full
                                shrink-0
                                flex-col
                                gap-2.5
                                sm:flex-row
                                md:w-auto
                                md:items-center
                                lg:gap-3
                            "
                        >
                            {/* =================================================
                                PRIMARY BUTTON
                            ================================================= */}
                            <Link
                                href="/admissions/apply"
                                aria-label="Start your application"
                                className="
                                    group/button
                                    relative
                                    inline-flex
                                    h-[48px]
                                    w-full
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-full
                                    p-[1.5px]
                                    shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-amber-300
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-[#0D0357]
                                    sm:h-[50px]
                                    sm:w-auto
                                "
                            >
                                {/* Animated SVG border */}
                                <svg
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-[-180%]
                                        h-[460%]
                                        w-[460%]
                                        animate-[spin_3.5s_linear_infinite]
                                        motion-reduce:animate-none
                                    "
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <linearGradient
                                            id="button-border"
                                            x1="0"
                                            y1="0"
                                            x2="1"
                                            y2="1"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#f59e0b"
                                                stopOpacity="0"
                                            />
                                            <stop
                                                offset="0.5"
                                                stopColor="#fde68a"
                                                stopOpacity="0"
                                            />
                                            <stop
                                                offset="0.72"
                                                stopColor="#fde68a"
                                                stopOpacity="1"
                                            />
                                            <stop
                                                offset="0.86"
                                                stopColor="#f59e0b"
                                                stopOpacity="1"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#f59e0b"
                                                stopOpacity="0"
                                            />
                                        </linearGradient>
                                    </defs>

                                    <rect
                                        x="2"
                                        y="2"
                                        width="96"
                                        height="96"
                                        rx="48"
                                        fill="none"
                                        stroke="url(#button-border)"
                                        strokeWidth="3"
                                    />
                                </svg>

                                <span
                                    className="
                                        relative
                                        inline-flex
                                        h-full
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-full
                                        bg-white
                                        px-6
                                        text-[13px]
                                        font-bold
                                        text-[#0D0357]
                                        transition-colors
                                        duration-300
                                        group-hover/button:bg-amber-50
                                        sm:w-auto
                                        sm:px-7
                                        sm:text-sm
                                    "
                                >
                                    <span>Start Your Application</span>

                                    <span
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover/button:translate-x-1
                                        "
                                    >
                                        <ArrowRightIcon />
                                    </span>
                                </span>
                            </Link>

                            {/* =================================================
                                SECONDARY BUTTON
                            ================================================= */}
                            <Link
                                href="/academics/programs"
                                aria-label="Explore academic programs"
                                className="
                                    group/button
                                    inline-flex
                                    h-[48px]
                                    w-full
                                    items-center
                                    justify-center
                                    gap-1.5
                                    rounded-full
                                    border
                                    border-white/[0.16]
                                    bg-white/[0.045]
                                    px-6
                                    text-[13px]
                                    font-semibold
                                    text-white/80
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-white/[0.28]
                                    hover:bg-white/[0.09]
                                    hover:text-white
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-white/50
                                    sm:h-[50px]
                                    sm:w-auto
                                    sm:px-7
                                    sm:text-sm
                                "
                            >
                                <span>Explore Programs</span>

                                <span
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover/button:translate-x-1
                                    "
                                >
                                    <ChevronRightIcon />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* =================================================
                        BOTTOM SVG ACCENT
                    ================================================= */}
                    <svg
                        aria-hidden="true"
                        className="
                            absolute
                            bottom-0
                            left-[6%]
                            h-4
                            w-[88%]
                        "
                        viewBox="0 0 1000 16"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                id="bottom-accent"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                            >
                                <stop
                                    offset="0"
                                    stopColor="#FCD34D"
                                    stopOpacity="0"
                                />
                                <stop
                                    offset="0.5"
                                    stopColor="#FCD34D"
                                    stopOpacity="0.65"
                                />
                                <stop
                                    offset="1"
                                    stopColor="#FCD34D"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>

                        <path
                            d="M0 15H1000"
                            stroke="url(#bottom-accent)"
                            strokeWidth="1"
                        />

                        <circle
                            cx="500"
                            cy="15"
                            r="2"
                            fill="#FDE68A"
                            opacity="0.8"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}