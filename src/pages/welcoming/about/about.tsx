import React from "react";
import { Box, Typography } from "@mui/material";
import Syaq from "../../../images/syaq.svg";


export const About = () => {
    return (
        <div>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    flexDirection: "column",
                    borderRadius: 1,
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <Box sx={{ marginTop: 20 }}>
                    <img src={Syaq} width="100px" alt="image3" />
                </Box>

                <Box>
                    <Typography sx={{marginTop: 10,maxWidth:'750px'}}>
                        توظف منصة سياق تقنيات الذكاء الاصطناعي معالجة اللغة الطبيعية في إثراء المعجم العربي من خلال سحب البيانات من مواقع التواصل الاجتماعي ، وتحليل المفردات وجذورها ثم تقوم بإستنباط المعاني لها من خلال فهم السياق ، وبعد ذلك تقوم بالتحقق من المفردات والمصطلحات ومعانيها الموجودة في معجم الرياض بحيث ما كان موجود يتم تحسينه والمفردات الغير موجودة يتم تغذية المعجم بها بحيث تصنف الكلمات ضمن الدارجة والمعاصرة مما يساهم في زخور المعجم بالمفردات الشائعة والمعاصرة الصحيحة بحيث يصبح مرجع للباحثين في اللغات والترجمة وعلوم اللغة العربية والمفردات والصناعة المعجمية وفهم اللهجات وشيوع الكلمات على مستوى الوطن العربي.
                    </Typography>
                </Box>
            </Box>

        </div>
    );
};
