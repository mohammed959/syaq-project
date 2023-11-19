import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "@mui/system";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Chart, ArcElement } from "chart.js";
import MapImage from "../../../../images/Frame 2map.svg";
import "./statistics.css";

Chart.register(ArcElement);

export const Statistics = () => {
  const theme = useTheme();
  const isMeduim = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const doughnutChartData = {
    labels: ["Slice 1", "Slice 2", "Slice 3"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)"
        ],
        borderWidth: 2
      }
    ]
  };
  const doughnutChartOptions = {
    cutout: "95%"
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
          تحت التطوير
        </Typography>
      </div>

      <div style={{ opacity: "0.3" }}>
        <Box
          sx={{
            textAlign: "right",
            marginTop: isLargeScreen ? "0px" : isMeduim ? "0px" : "20px",
            paddingX: "10px"
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            مرات الظهور الكلمة
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <Box sx={{ maxWidth: "50%", flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right"
              }}
            >
              <Box>
                <Typography noWrap className="typography">
                  المنطقة الوسطى ٦٢.٥ ٪
                </Typography>
              </Box>
              <Box>
                <Typography noWrap className="typography">
                  المنطقة الغربية ٢٥ ٪
                </Typography>
              </Box>
              <Box>
                <Typography noWrap className="typography">
                  المنطقة الجنوبية ١٢.٥
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ maxWidth: "50%", flexGrow: 1, marginLeft: "auto" }}>
            <Doughnut
              data={doughnutChartData}
              options={{
                ...doughnutChartOptions,
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{textAlign:'right'}}>
            <Typography sx={{fontWeight:'bold', marginBottom:"20px"}}>البيانات الديموغرافية</Typography>
          </Box>
          <Box>
            <img src={MapImage} alt="Map" style={{marginTop:'10px'}} />
          </Box>
        </Box>
      </div>
    </div>
  );
};
