import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ParticleBackdrop } from "@/components/ui/Decor";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-white py-32">
      <ParticleBackdrop />
      <Container className="text-center">
        <Reveal>
          <p className="gradient-text text-[5rem] font-semibold leading-none tracking-tight sm:text-[8rem]">
            404
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            This page has gone off the map.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-ink-soft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. The page you
            were looking for may have moved or no longer exists.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/contact" variant="secondary" size="lg" icon="arrowUpRight">
              Contact us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
