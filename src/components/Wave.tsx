import { useId } from "react";

export function Wave30() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" opacity="0.3" d="M0,32L40,80C80,128,160,224,240,218.7C320,213,400,107,480,58.7C560,11,640,21,720,64C800,107,880,181,960,218.7C1040,256,1120,256,1200,250.7C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" opacity="0.3" d="M0,288L60,272C120,256,240,224,360,229.3C480,235,600,277,720,288C840,299,960,277,1080,256C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
    )
}

export function Wave60() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" opacity="0.6" d="M0,192L40,170.7C80,149,160,107,240,96C320,85,400,107,480,144C560,181,640,235,720,229.3C800,224,880,160,960,133.3C1040,107,1120,117,1200,117.3C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" opacity="0.6" d="M0,128L40,128C80,128,160,128,240,133.3C320,139,400,149,480,176C560,203,640,245,720,224C800,203,880,117,960,101.3C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>
    )
}

export function WavesBG() {
    return (
        <>
            <div className="relative w-full">
                <Wave30 />
            </div>
            <div className="relative w-full -top-140">
                <Wave60 />
            </div>
        </>
    )
}

export function WaveTop() {
    const maskId = useId().replaceAll(":", "");
    const gradientId = `${maskId}-gradient`;
    const glowId = `${maskId}-glow`;

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
            <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 1000"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27123a" />
                        <stop offset="48%" stopColor="#512477" />
                        <stop offset="100%" stopColor="#351444" />
                    </linearGradient>
                    <radialGradient id={glowId} cx="18%" cy="35%" r="62%">
                        <stop offset="0%" stopColor="#b14deb" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#b14deb" stopOpacity="0" />
                    </radialGradient>
                    <mask
                        id={maskId}
                        x="0"
                        y="0"
                        width="1440"
                        height="1000"
                        maskUnits="userSpaceOnUse"
                        maskContentUnits="userSpaceOnUse"
                    >
                        <path
                            fill="white"
                            d="M0 112C80 126 160 148 240 158C320 168 400 171 480 154C640 121 800 106 960 110C1120 114 1280 126 1360 134L1440 142V1000H0Z"
                        />
                    </mask>
                </defs>
                <rect
                    width="1440"
                    height="1000"
                    fill={`url(#${gradientId})`}
                    mask={`url(#${maskId})`}
                />
                <rect
                    width="1440"
                    height="1000"
                    fill={`url(#${glowId})`}
                    mask={`url(#${maskId})`}
                />
            </svg>
        </div>
    )
}

export function WaveBottom() {
    const maskId = useId().replaceAll(":", "");
    const gradientId = `${maskId}-gradient`;

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
            <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 1000"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27123a" />
                        <stop offset="48%" stopColor="#512477" />
                        <stop offset="100%" stopColor="#351444" />
                    </linearGradient>
                    <mask
                        id={maskId}
                        x="0"
                        y="0"
                        width="1440"
                        height="1000"
                        maskUnits="userSpaceOnUse"
                        maskContentUnits="userSpaceOnUse"
                    >
                        <path
                            fill="white"
                            d="M0 0H1440V830C1280 880 1120 910 960 900C800 890 650 850 480 815C320 780 160 790 0 850Z"
                        />
                    </mask>
                </defs>
                <rect
                    width="1440"
                    height="1000"
                    fill={`url(#${gradientId})`}
                    mask={`url(#${maskId})`}
                />
            </svg>
        </div>
    )
}