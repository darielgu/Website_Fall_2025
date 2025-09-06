import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import { motion } from "motion/react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectShowcase({
  image,
  title,
  description,
  stack,
  link,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
    >
      <Card
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#162852",
          color: "white",
          borderRadius: 3,
          p: 2,
          mb: 3,
          border: "1px, solid, silver",
        }}
      >
        {/* Project Screenshot */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: { xs: "100%", md: "30%" },
            borderRadius: 2,
          }}
        />

        {/* Project Content */}
        <CardContent
          sx={{ flex: 1, ml: { xs: 0, md: 3 }, mt: { xs: 2, md: 0 } }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "gray.400", mb: 2 }}
          >
            {stack}
          </Typography>

          <Link
            href={link}
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              color: "white",
              "&:hover": { textDecoration: "underline" },
              width: "fit-content",
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} /> GitHub Link{" "}
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
