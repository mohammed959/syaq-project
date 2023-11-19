import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ImageGroup from "../../../images/Group 138group.svg";
import Icon from "../../../images/Group 244icon.svg";

export const MainWebPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "50px" }}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            flexDirection={isSmallScreen ? "column" : "row"}
            alignItems="center"
            maxWidth="70%"
            sx={{ margin: "auto" }}
          >
            <Grid item xs={12} lg={6} md={6} sx={{ textAlign: isSmallScreen ? "center" : "right", mb: isSmallScreen ? 4 : 0 }}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={Icon} alt="icon4" width="46px" height="46px" />
                  <Typography variant="h3" sx={{ fontSize: "28px", color: "#1C77FF", fontWeight: "bold", marginX: "15px" }}>
                    منصة سياق
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "22px", fontWeight: "bold",marginTop:'5px' }}>
                  محتوى زاخر بالكلمات العربية
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "18px", maxWidth: isSmallScreen ? "100%" : "70%",marginTop:'10px' }}>
                  منصة سياق تستخدام تقنيات الذكاء الاصطناعي لتغذية المعاجم بالكلمات العربية الدارجة عن طريق تحليل كلمات مواقع التواصل الإجتماعي وتوليد المعاني والدلالات من خلال فهم سياق الجملة .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <img src={ImageGroup} alt="group" width="100%" height="auto" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
