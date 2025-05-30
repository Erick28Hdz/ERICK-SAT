import { Typography } from "@mui/material";
import BasePaper from "./Paper";

const TestimonialCard = ({ content, author }: { content: string; author: string }) => (
  <BasePaper sx={{ minHeight: 100, maxWidth: 380 }}>
    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
      “{content}”
    </Typography>
    <Typography variant="caption" sx={{ textAlign: "right", mt: 2 }}>
      – {author}
    </Typography>
  </BasePaper>
);

export default TestimonialCard;