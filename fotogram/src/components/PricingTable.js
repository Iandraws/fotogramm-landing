import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  Switch,
  Badge,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "BASIS",
    monthlyPrice: 20,
    yearlyPrice: (20 * 12 * 0.84).toFixed(2),
    description: "Perfekt für Fotografen, die ihre Reise beginnen und erweitern möchten.",
    features: [
      "Unbegrenzte Veranstaltungen",
      "Unbegrenzte Kunden",
      "CRM (Kundenmanagement)",
      "Unbegrenzte Galerie",
      "Bild-Tagging",
      "Ausgewählte Bilder herunterladen",
      "Kundenanfragen",
      "Digitale Visitenkarte",
      "Automatisches Logo auf Bildern",
    ],
    unavailableFeatures: [
      "Kalender-Integration",
      "Live-Veranstaltung",
      "KI-Gesichtserkennung",
      "Live-Video-Streaming",
      "Digitales Album",
      "Digitaler Vertrag",
      "Eigene Domain",
      "iOS- & Android-Marken-App",
      "Alle Bilder herunterladen",
      "Videos und Reels",
      "Shop",
    ],
    buttonText: "30 Tage kostenlos testen",
  },
  {
    title: "FORTGESCHRITTEN",
    monthlyPrice: 50,
    yearlyPrice: (50 * 12 * 0.84).toFixed(2),
    description: "Für Fotografen, die ihre Qualität steigern und große Projekte organisieren wollen",
    features: [
      "Unbegrenzte Veranstaltungen",
      "Unbegrenzte Kunden",
      "CRM (Kundenmanagement)",
      "Unbegrenzte Galerie",
      "Bild-Tagging",
      "Ausgewählte Bilder herunterladen",
      "Kundenanfragen",
      "Digitale Visitenkarte",
      "Automatisches Logo auf Bildern",
      "Kalender-Integration",
      "Live-Veranstaltung",
      "KI-Gesichtserkennung",
      "Live-Video-Streaming",
      "Digitales Album",
      "Digitaler Vertrag",
      "Eigene Domain",
    ],
    unavailableFeatures: [
      "iOS- & Android-Marken-App",
      "Alle Bilder herunterladen",
      "Videos und Reels",
      "Shop",
    ],
    buttonText: "30 Tage kostenlos testen",
    popular: true,
  },
  {
    title: "PREMIUM",
    monthlyPrice: 200,
    yearlyPrice: (200 * 12 * 0.84).toFixed(2),
    description: "Für professionelle Fotografen und Unternehmen, die sich abheben möchten.",
    features: [
      "Unbegrenzte Veranstaltungen",
      "Unbegrenzte Kunden",
      "CRM (Kundenmanagement)",
      "Unbegrenzte Galerie",
      "Bild-Tagging",
      "Ausgewählte Bilder herunterladen",
      "Kundenanfragen",
      "Digitale Visitenkarte",
      "Automatisches Logo auf Bildern",
      "Kalender-Integration",
      "Live-Veranstaltung",
      "KI-Gesichtserkennung",
      "Live-Video-Streaming",
      "Digitales Album",
      "Digitaler Vertrag",
      "Eigene Domain",
      "iOS- & Android-Marken-App",
      "Alle Bilder herunterladen",
      "Videos und Reels",
      "Shop",
    ],
    unavailableFeatures: [],
    buttonText: "30 Tage kostenlos testen",
  },
  {
    title: "BENUTZERDEFINIERT",
    price: "-",
    description: "Ein maßgeschneiderter Plan, der auf Ihre Bedürfnisse zugeschnitten ist.",
    features: [
      "Kontaktieren Sie uns für einen maßgeschneiderten Plan, der zu Ihnen passt!",
    ],
    unavailableFeatures: [],
    buttonText: "Kontaktieren Sie uns",
  },
];

const PricingTable = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);

  const handleSignUp = (planTitle) => {
    navigate(`/signup?plan=${planTitle.toLowerCase()}`);
  };

  const handleContact = () => {
    navigate("/get-in-touch");
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: "40px", md: "40px" },
        paddingBottom: { xs: "40px", md: "40px" },
        paddingLeft: { xs: "40px", md: "16px" },
        paddingRight: { xs: "40px", md: "16px" },
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}
      >
        Preispläne
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: isYearly ? "#757575" : "#1976d2", fontWeight: "bold" }}
        >
          Monatlich bezahlen und <br /> flexibel bleiben
        </Typography>
        <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
        <Typography
          variant="body1"
          sx={{ color: isYearly ? "#1976d2" : "#757575", fontWeight: "bold" }}
        >
          Jährlich bezahlen und <br /> 16% sparen
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              height: "fit-content",
              width: { xs: "100%" },
              maxWidth: { xs: "100%", md: "280px" },
              minWidth: { md: "280px" },
              padding: "24px 16px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              boxShadow: plan.popular
                ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                : "0 2px 10px rgba(0, 0, 0, 0.1)",
              border: plan.popular ? "2px solid #1976d2" : "none",
              position: "relative",
            }}
          >
            {/* Display badge only if the plan is not "BENUTZERDEFINIERT" */}
            {plan.popular && plan.title !== "BENUTZERDEFINIERT" && (
              <Badge
                overlap="circular"
                badgeContent={<FavoriteIcon sx={{ color: "#fff", fontSize: "20px" }} />}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  "& .MuiBadge-badge": {
                    backgroundColor: "#1976d2",
                    borderRadius: "50%",
                    height: "36px",
                    width: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              />
            )}
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              {plan.title}
            </Typography>
            
            {plan.title !== "BENUTZERDEFINIERT" && (
              <>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  {isYearly ? `${plan.yearlyPrice}€ / Jahr` : `${plan.monthlyPrice}€ / Monat`}
                </Typography>
                {isYearly && (
                  <Typography variant="body2" sx={{ color: "#757575", marginBottom: "10px" }}>
                    ({(plan.yearlyPrice / 12).toFixed(2)}€ / Monat)
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: "#757575", marginBottom: "10px" }}>
                  zzgl. MwSt.
                </Typography>
              </>
            )}

            <Typography variant="body2" sx={{ marginBottom: "20px" }}>
              {plan.description}
            </Typography>

            <Divider />

            <List>
  {plan.features.map((feature) => (
    <ListItem
      key={feature}
      style={{ display: "flex", alignItems: "center", gap: "16px" }}
    >
      {plan.title !== "BENUTZERDEFINIERT" && <CheckIcon sx={{ color: "green" }} />}
      {feature}
    </ListItem>
  ))}
  {plan.unavailableFeatures.map((unavailableFeature) => (
    <ListItem
      key={unavailableFeature}
      style={{ display: "flex", alignItems: "center", gap: "16px" }}
    >
      <CloseIcon sx={{ color: "red" }} />
      {unavailableFeature}
    </ListItem>
  ))}
</List>


            <Button
              variant="contained"
              onClick={() =>
                plan.title === "BENUTZERDEFINIERT" ? handleContact() : handleSignUp(plan.title)
              }
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                padding: "8px 32px",
                textTransform: "none",
                borderRadius: "24px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
            >
              {plan.buttonText}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricingTable;
