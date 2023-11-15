import HeadingSection from "../header/HeadingSection";

export default function NotFound(){
    return(
        <>
        <HeadingSection><h1>Page Not Found</h1></HeadingSection>
        <div className="wrapper">
			<main className="main">
                <section>
                <h1>Page Not Found</h1>
                <p>Please visit the home page for more information.</p>
                </section>
                </main>
			</div>
        </>
    );
}