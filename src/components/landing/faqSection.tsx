"use client";
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqItems = [
    {
        question: "How do I create a resume?",
        answer: "xxx"
    },
    {
        question: "Can I apply to multiple jobs at once?",
        answer: ""
    },
    {
        question: "How will employers contact me?",
        answer: ""
    },
    {
        question: "Can I edit my personal information?",
        answer: ""
    },
    {
        question: "How do I track my application status?",
        answer: ""
    },
    {
        question: "Is this platform free to use?",
        answer: ""
    }
];

const FAQSection: React.FC = () => {
    return (
        <Box sx={{ py: 3 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" gutterBottom sx={{
                        fontSize: { xs: 'h3.fontSize', lg: 'h2.fontSize' },
                        color: '#101828'
                    }}>
                        Frequently asked questions
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: 'h6.fontSize', lg: 'h5.fontSize' },
                            color: 'text.secondary',
                        }}
                    >
                        Everything you need to know about the product and billing.
                    </Typography>
                </Box>

                <Box sx={{ maxWidth: 768, mx: 'auto' }}>
                    {faqItems.map((item, index) => (
                        <Accordion
                            key={index}
                            elevation={0}
                            sx={{
                                '&:before': { display: 'none' },
                                borderTop: index !== 0 ? 1 : 0,
                                borderColor: 'grey.200',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    px: 0,
                                    '& .MuiAccordionSummary-content': {
                                        margin: '24px 0',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            {item.answer && (
                                <AccordionDetails sx={{ px: 0 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            )}
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
