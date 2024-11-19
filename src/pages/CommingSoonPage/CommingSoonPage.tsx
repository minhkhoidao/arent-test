import Button from "@/components/button";
import Typography from "@/components/typography";

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-background-paper">
            <div className="text-center space-y-8">
                <Typography as="h1" variant="h1" className="text-primary-main">
                    Coming Soon
                </Typography>

                <Typography variant="body1" className="max-w-lg text-neutral-dark">
                    We're working hard to bring you something amazing.
                    Stay tuned for updates!
                </Typography>

                <Button
                    size="lg"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </Button>
            </div>
        </div>
    )
}
