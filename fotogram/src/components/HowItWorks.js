import { Box, Typography } from '@mui/material';
import React from 'react';
import TryIt from './TryIt';

const sections = [
  {
    title: 'Unsere Vision und Kernfunktionen im Blick',
    description:
      'Fotogram ist mehr als eine Plattform – es ist eine Auszeichnung für Fotografen, die ihr Geschäft effizienter gestalten, ihre Marke stärken und ihren Kunden ein exklusives Erlebnis bieten möchten. Mit modernsten Funktionen und einer luxuriösen Nutzererfahrung ermöglicht Fotogram Fotografen, ihre Arbeit auf höchstem Niveau zu präsentieren und ihr Einkommen nachhaltig zu steigern. Unsere Server in Deutschland gewährleisten dabei höchste Sicherheitsstandards und Datenschutz.',
    image: '',
  },

  {
    title: 'Umfassendes Kundenmanagement (CRM)',
    description:
      'Verwalten Sie alle Kundeninformationen und Auftragsdetails an einem zentralen Ort. So verbessern Sie Ihre Marketingstrategien und gestalten die Kundenkommunikation effizienter.',
    image: '/assets/funk/shareGalleryImage.mp4',
  },

  {
    title: 'Kalender- und Erinnerungsfunktionen',
    description:
      'Behalten Sie Ihre geplanten Events und Aufgaben mit einem integrierten, synchronisierten Kalender im Blick. Erinnerungen helfen Ihnen, Ihre Produktivität zu steigern und keine wichtigen Termine zu verpassen.',
    image: '/assets/funk/shareGalleryImage.mp4',
  },

  {
    title: 'Live-Bildübertragung und Streaming',
    description:
      'Laden Sie Bilder während Veranstaltungen in Echtzeit hoch und ermöglichen Sie Ihren Kunden, diese sofort anzusehen, herunterzuladen oder zu teilen. Gäste können mit einem QR-Code auf Bilder in hoher Auflösung zugreifen. Zusätzlich bietet Fotogram Live-Video-Streaming für besondere Events.',
    image: '/assets/funk/shareGalleryImage.mp4',
  },

  {
    title: 'KI-gestützte Gesichtserkennung',
    description:
      'Unsere innovative Gesichtserkennungstechnologie macht es Kunden leicht, ihre Bilder zu finden. Ein Selfie genügt, und die passenden Bilder werden schnell angezeigt – für ein optimiertes und personalisiertes Kundenerlebnis.',
    image: '/assets/funk/shareGalleryImage.mp4',
  },

  {
    title: 'Individuelles Branding und automatisches Wasserzeichen',
    description:
      'Schützen Sie Ihre Bildrechte und stärken Sie Ihre Marke mit automatisch platzierten Wasserzeichen auf allen Bildern – ohne externe Software. So bleibt Ihr Logo stets präsent und Ihre Arbeit professionell gebrandet.',
    image: '/assets/funk/simplicityImage.jpg',
  },
  {
    title: 'Flexibles Preis- und Abonnementmodell',
    description:
      "Wählen Sie aus verschiedenen Preismodellen – von Basic bis Premium – die für Sie passende Lösung. Maßgeschneiderte Optionen unterstützen Fotografen in jeder Entwicklungsphase ihres Geschäfts.",
    image: '/assets/funk/presentationModeImage.png',
  },
  {
    title: ' Digitaler Shop für Zusatzverkäufe',
    description:
      "Bieten Sie Ihre Druckservices oder Produkte direkt über Fotogram an und profitieren Sie von 24/7-Verkäufen mit einem integrierten Bezahlsystem über Stripe oder Ihr Kreditinstitut.",
    image: '/assets/funk/editModeImage.jpg',
  },

  {
    title: 'Digitale Alben mit über 400 Vorlagen',
    description:
      "Erstellen Sie beeindruckende digitale Alben für Ihre Kunden mit mehr als 400 anpassbaren Vorlagen. Präsentieren Sie Ihre Fotos in professionellen und kreativen Designs, die Ihren Workflow beschleunigen und die Kundenzufriedenheit steigern.",
    image: '/assets/funk/votingImage.mp4',
  },

  {
    title: 'Digitale Vertragsverwaltung',
    description:
      'Erstellen, teilen und unterschreiben Sie Verträge elektronisch – einfach und papierlos. So integrieren Sie den gesamten Vertragsprozess nahtlos in Ihren Workflow.',
    image: '/assets/funk/colorMarkersImage.mp4',
  },

  {
    title: 'Digitale Visitenkarte',
    description:
      "Eine digitale Visitenkarte bündelt Ihre sozialen Kanäle und Kontaktdaten, um die Gewinnung neuer Kunden zu erleichtern und bestehende Kontakte zu pflegen.",
    image: '/assets/funk/votingImage.mp4',
  },

  {
    title: 'Dashboard mit Statistiken und Analysen',
    description:
      "Erhalten Sie einen umfassenden Überblick über Ihre geschäftlichen Aktivitäten und Kunden. Die Analysefunktionen helfen Ihnen, die Entwicklung Ihres Geschäfts zu verfolgen und zu optimieren.",
    image: '/assets/funk/votingImage.mp4',
  },


];

const FunktionPage = () => {
  return (
    <Box
      sx={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}
      >
        Warum Fotogram?
      </Typography>

      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '60px',
            textAlign: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ maxWidth: '600px' }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: '10px' }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#555' }}
            >
              {section.description}
            </Typography>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%' }}
          >
            {section.image.endsWith('.mp4') ? (
              <video
                src={section.image}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '10px',
                }}
              />
            ) : (
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '10px',
                }}
              />
            )}
          </Box>
        </Box>
      ))}

      {/* Final Call-to-Action Section */}
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          padding: '60px 20px',
          marginTop: '60px',
          textAlign: 'center',
        }}
      >
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', marginBottom: '20px' }}
          >
            Jetzt kostenlos testen!
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '30px', color: '#555' }}
          >
            Überzeugen Sie sich selbst von den Vorteilen, die Fotogram bietet. 
            Starten Sie jetzt Ihre 30-tägige kostenlose Testphase und erleben Sie, 
            wie Fotogram Ihr Fotografiegeschäft auf ein neues Niveau hebt.
          </Typography>

          <TryIt />
        </Box>
      </Box>
    </Box>
  );
};

export default FunktionPage;
