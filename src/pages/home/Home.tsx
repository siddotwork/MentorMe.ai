import "./Home.scss"
export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <h1 className="home__title">
                    MentorMe.ai
                </h1>

                <p className="home__subtitle">
                    Your AI-powered mentoring platform
                </p>

                <div className="home__banner">
                    <p className="home__banner-title">
                        🚧 Under Production 🚧
                    </p>
                    <p className="home__banner-description">
                        We're building something amazing. Stay tuned!
                    </p>
                </div>

                <p className="home__footer">
                    Coming soon...
                </p>
            </div>
        </div>
    );
}
