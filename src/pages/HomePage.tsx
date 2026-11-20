import { useEffect, useState } from "react";

import PageTransition from "../components/common/PageTransition";
import DynastyNavigation from "../components/home/DynastyNavigation";
import Hero from "../components/home/Hero";

import type { Dynasty } from "../types/dynasty";
import { dynastyService } from "../services/dynastyService";
import HeritageSection from "../components/home/HeritageSection";
import { useAudio } from "../hooks/useAudioPlayer";

const HomePage = () => {
  const [dynasties, setDynasties] = useState<Dynasty[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setDynastyTracks } = useAudio();

  useEffect(() => {
    setDynastyTracks(["byzantine-01", "byzantine-02"]);
  }, [setDynastyTracks]);

  useEffect(() => {
    const loadDynasties = async () => {
      try {
        const data = await dynastyService.getAllPublished();
        setDynasties(data);
      } catch (error) {
        console.error("Greška prilikom učitavanja dinastija:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDynasties();
  }, []);

  return (
    <PageTransition>
      <main className="home-page">
        <Hero />

        {!isLoading && dynasties.length > 0 && (
          <DynastyNavigation dynasties={dynasties} />
        )}

        <HeritageSection />
      </main>
    </PageTransition>
  );
};

export default HomePage;
