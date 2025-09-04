import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid } from "@mui/material";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState("");
  const [error, setError] = useState("");

  const handleShorten = () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    setError("");
    alert(`Shortening URL: ${url} with shortcode: ${shortcode} and validity: ${validity}`);
  };

  return (
    <Box p={3} maxWidth={600} mx="auto">
      <Typography variant="h4" align="center" gutterBottom>
        URL Shortener
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Long URL"
            value={url}
            fullWidth
            onChange={(e) => setUrl(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Preferred Shortcode (optional)"
            value={shortcode}
            fullWidth
            onChange={(e) => setShortcode(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Validity (minutes, optional)"
            value={validity}
            fullWidth
            type="number"
            onChange={(e) => setValidity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleShorten}>
            Shorten URL
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UrlShortener;
