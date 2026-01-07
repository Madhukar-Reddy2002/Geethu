function downloadResume() {
    // Build Word-compatible HTML structure with proper two-column table
    const wordHTML = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset='utf-8'>
    <title>Dandu Madhukar Reddy - Resume</title>
    <style>
        @page { margin: 0.75in; size: letter; }
        body { font-family: Calibri, sans-serif; font-size: 10.5pt; line-height: 1.5; color: #333; }
        table { width: 100%; border-collapse: collapse; }
        .header { text-align: center; padding-bottom: 15pt; border-bottom: 3pt solid #667eea; margin-bottom: 20pt; }
        .header h1 { font-size: 28pt; color: #2c3e50; margin: 0 0 8pt 0; font-weight: bold; }
        .header .tagline { font-size: 13pt; color: #667eea; font-weight: bold; }
        .left-col { width: 68%; vertical-align: top; padding-right: 20pt; }
        .right-col { width: 32%; vertical-align: top; padding-left: 20pt; border-left: 2pt solid #e0e0e0; }
        .section { margin-bottom: 18pt; }
        .section-title { font-size: 12pt; font-weight: bold; color: #2c3e50; margin-bottom: 8pt; text-transform: uppercase; padding-bottom: 4pt; border-bottom: 2pt solid #667eea; }
        .right-col .section-title { font-size: 10.5pt; border-bottom: 1pt solid #667eea; }
        .job-title { font-size: 11.5pt; font-weight: bold; color: #2c3e50; margin: 0 0 2pt 0; }
        .job-company { font-size: 10.5pt; color: #667eea; font-weight: bold; }
        .job-date { font-size: 9.5pt; color: #888; font-style: italic; }
        .job-detail { font-size: 9.5pt; color: #666; margin-bottom: 8pt; font-style: italic; }
        ul { margin: 8pt 0 10pt 18pt; padding: 0; }
        li { margin-bottom: 8pt; line-height: 1.6; }
        .highlight { background-color: #f8f9ff; padding: 10pt 12pt; border-left: 4pt solid #667eea; margin: 10pt 0; font-style: italic; }
        .project-title { font-weight: bold; color: #2c3e50; font-size: 10.5pt; margin-bottom: 2pt; }
        .project-subtitle { font-style: italic; color: #666; font-size: 9pt; margin-bottom: 6pt; }
        .skill-title { font-weight: bold; color: #2c3e50; font-size: 10pt; margin: 0 0 4pt 0; }
        .skill-text { color: #555; font-size: 9.5pt; line-height: 1.7; }
        .degree { font-weight: bold; color: #2c3e50; font-size: 10.5pt; }
        .edu-detail { font-size: 9pt; color: #666; }
        strong { font-weight: bold; }
        em { font-style: italic; }
    </style>
</head>
<body>
    <div class="header">
        <h1>DANDU MADHUKAR REDDY</h1>
        <div class="tagline">CRO Analyst | Experimentation & User Analytics</div>
    </div>
    
    <table>
        <tr>
            <td class="left-col">
                <div class="section">
                    <div class="section-title">Professional Summary</div>
                    <p style="text-align: justify; margin: 0;">CRO Analyst with hands-on experience in experimentation and conversion optimization for BFSI acquisition funnels at iQuanti. Contributed to <strong>10+ A/B tests</strong> from hypothesis development through execution and analysis. Skilled at identifying user friction through behavioral data (GA4, Adobe Analytics, Hotjar) and translating insights into test-ready hypotheses. Strong analytical background with data analytics and frontend development skills supporting technical CRO implementation and custom tooling.</p>
                </div>
                
                <div class="section">
                    <div class="section-title">Work Experience</div>
                    <div class="job-title">CRO Analyst</div>
                    <div class="job-company">iQuanti</div>
                    <div class="job-date">Feb 2025 – Present</div>
                    <div class="job-detail">BFSI Clients – Business Loans & Credit Card Acquisition</div>
                    <ul>
                        <li>Generate experiment ideas by analyzing <strong>GA4 funnel reports, Adobe Analytics segmentation, and Hotjar session recordings</strong> to identify drop-off points and user friction in lead-generation flows</li>
                        <li>Prioritize hypotheses using <strong>PIE framework</strong> (Potential, Importance, Ease) and collaborate with senior CRO team to build quarterly experimentation roadmaps</li>
                        <li>Execute and monitor <strong>8+ live A/B tests on VWO</strong>, conducting daily QA checks and performance tracking to ensure test integrity and valid results</li>
                        <li>Diagnose test underperformance mid-flight by cross-analyzing behavioral data, traffic patterns, and conversion metrics to identify anomalies or segment-specific issues</li>
                        <li>Deliver <strong>bi-weekly experiment status reports</strong> to clients, presenting test performance, interim insights, and strategic recommendations in stakeholder-friendly presentations</li>
                        <li>Document inconclusive test learnings and behavioral observations to inform iteration strategies and strengthen future hypotheses</li>
                    </ul>
                    <div class="highlight"><strong>Key Contribution:</strong> Identified critical form abandonment pattern through heatmap analysis, informing hypothesis that improved variation performance by 18% in follow-up test</div>
                </div>
                
                <div class="section">
                    <div class="section-title">Projects</div>
                    <div style="margin-bottom: 15pt;">
                        <div class="project-title">Experimentation Knowledge Base</div>
                        <div class="project-subtitle">Platform for centralized test documentation and learning retention</div>
                        <ul>
                            <li>Building internal tool to manage experiment lifecycle: hypothesis library, prioritization scores, test configurations, performance tracking, and post-test learnings</li>
                            <li>Designed database schema to enable filtering by test status, hypothesis category, winning patterns, and business impact</li>
                            <li>Goal: Create institutional memory for experimentation program to accelerate future ideation and prevent repeated mistakes</li>
                        </ul>
                    </div>
                    <div>
                        <div class="project-title">Statistical Significance Calculator</div>
                        <div class="project-subtitle">Web-based tool for experiment planning and sample size estimation</div>
                        <ul>
                            <li>Developed calculator to estimate required sample size and test duration based on baseline conversion rate, MDE (Minimum Detectable Effect), and traffic volume</li>
                            <li>Used by team during test planning to set realistic timelines and manage stakeholder expectations</li>
                            <li>Built with interactive UI allowing real-time adjustment of statistical parameters (confidence level, power, traffic allocation)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Education</div>
                    <div class="degree">Bachelor of Technology (B.Tech)</div>
                    <div class="degree" style="font-weight: 600; font-size: 10pt;">Computer Science & Engineering</div>
                    <div class="edu-detail"><em>Specialization: Machine Learning & AI</em></div>
                    <div class="edu-detail">Lovely Professional University, Punjab</div>
                    <div class="edu-detail">2020 – 2024</div>
                </div>
            </td>
            
            <td class="right-col">
                <div class="section">
                    <div class="section-title">Contact</div>
                    <p style="margin: 0 0 10pt 0; font-size: 9.5pt;">📍 Puttaparthi, Andhra Pradesh, India</p>
                    <p style="margin: 0 0 10pt 0; font-size: 9.5pt;">📧 tomadhukarreddy@gmail.com</p>
                    <p style="margin: 0 0 10pt 0; font-size: 9.5pt;">📞 +91 7670998873</p>
                    <p style="margin: 0; font-size: 9.5pt;">🔗 LinkedIn | GitHub | Portfolio</p>
                </div>
                
                <div class="section">
                    <div class="section-title">Core CRO Skills</div>
                    <div style="margin-bottom: 12pt;">
                        <div class="skill-title">🧪 Experimentation</div>
                        <div class="skill-text">A/B Testing • Hypothesis Development • PIE Prioritization • Test Execution & QA • Roadmap Planning • MVT Concepts</div>
                    </div>
                    <div style="margin-bottom: 12pt;">
                        <div class="skill-title">📊 Analytics</div>
                        <div class="skill-text">Funnel Analysis • User Segmentation • Drop-off Diagnosis • Session Recording • Heatmap Analysis • KPI Definition</div>
                    </div>
                    <div>
                        <div class="skill-title">🎯 UX Research</div>
                        <div class="skill-text">User Friction ID • Behavioral Patterns • Competitive Analysis • Best Practices • Journey Mapping</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Tools & Platforms</div>
                    <div style="margin-bottom: 12pt;">
                        <div class="skill-title">🛠️ CRO Tools</div>
                        <div class="skill-text">VWO • Google Analytics 4 • Adobe Analytics • Hotjar • Google Tag Manager</div>
                    </div>
                    <div style="margin-bottom: 12pt;">
                        <div class="skill-title">📈 Analysis</div>
                        <div class="skill-text">Excel/Sheets (Pivot Tables, VLOOKUP) • PowerPoint • Data Visualization</div>
                    </div>
                    <div>
                        <div class="skill-title">💻 Technical</div>
                        <div class="skill-text">SQL • Python (Pandas) • HTML/CSS/JavaScript • Git</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Key Strengths</div>
                    <p style="margin: 0 0 8pt 0; font-size: 9.5pt; line-height: 1.6;">▸ Translating BFSI funnels to e-commerce contexts</p>
                    <p style="margin: 0 0 8pt 0; font-size: 9.5pt; line-height: 1.6;">▸ Analytical storytelling for stakeholders</p>
                    <p style="margin: 0 0 8pt 0; font-size: 9.5pt; line-height: 1.6;">▸ Technical CRO implementation support</p>
                    <p style="margin: 0 0 8pt 0; font-size: 9.5pt; line-height: 1.6;">▸ UX psychology & behavior analysis</p>
                    <p style="margin: 0; font-size: 9.5pt; line-height: 1.6;">▸ Evidence-based optimization mindset</p>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`;
    
    // Create and download
    const blob = new Blob(['\ufeff', wordHTML], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dandu_Madhukar_Reddy_CRO_Analyst.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Success feedback
    const btn = document.querySelector('.download-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>✅</span><span>Downloaded Successfully!</span>';
    btn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 3000);
}
