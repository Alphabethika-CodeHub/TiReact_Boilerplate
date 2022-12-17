import { Button, Chip } from "@material-tailwind/react";

export default function CustomFooter() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="mx-auto max-w-screen shadow-lg px-9 py-4 rounded-lg mt-8 border">
            <div className="flex justify-between items-center mb-2">
                <section>
                    <Chip color="purple" value="Made With ❤️ From Artisan 🥐" />
                </section>
                <section>
                    <Button className="mr-10" onClick={() => scrollToTop()}>Back to Top</Button>
                </section>
            </div>
        </footer>
    )
}