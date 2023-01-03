import { Button, Chip } from "@material-tailwind/react";

export default function CustomFooter() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-white mx-auto w-full shadow-lg px-9 py-4 mt-8 border fixed bottom-0 dark:bg-soft-black dark:border-0">
            <div className="flex justify-between items-center">
                <section>
                    <Chip color="purple" value="Made With ❤️ From Artisan 🥐" />
                </section>
                <section>
                    <Button size="sm" className="mr-10" onClick={() => scrollToTop()}>Back to Top</Button>
                </section>
            </div>
        </footer>
    )
}