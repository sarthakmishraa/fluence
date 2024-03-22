// Visualisations.js

function Visualisations() {
  return (
    <div className="Visualisations">
      <h2 className="VisualisationsHeading">Trends in Vaccination: Who is getting protected ?</h2>

      <p className="VisualizationContentHeading">Levels of concern</p>
      <div className="H1N1_graph1"></div>
      <p className="VisualizationContent">From these graphs, we can infer that while there is a general level of concern about the H1N1 flu among the respondents, most of them only have a little knowledge about it. This suggests there may be a need for educational campaigns to increase the level of knowledge, which could potentially influence the level of concern and possibly the actions taken in response to the flu, such as vaccination or other preventive measures.</p>
      
      <hr/>
      
      <p className="VisualizationContentHeading">Opinions on Vaccine Effectiveness</p>
      <div className="H1N1_graph2"></div>
      <p className="VisualizationContent">This graph shows that the majority of respondents believe the H1N1 vaccine to be "Somewhat effective," with this category having the highest number of respondents. The second-largest group of respondents selected "Don't know," indicating uncertainty or lack of knowledge about the vaccine's effectiveness. A smaller number of respondents believe the vaccine is "Very effective," while very few think it is "Not very effective" or "Not at all effective."</p>
      <p className="VisualizationContent">In contrast, the opinions on the seasonal flu vaccine show that most respondents believe it to be "Very effective," which is the highest bar on this graph. The second-highest category is "Somewhat effective," followed by a much smaller number of respondents who selected "Don't know." Very few respondents believe the seasonal flu vaccine is "Not very effective" or "Not at all effective."</p>
      <p className="VisualizationContent">The seasonal flu vaccine is viewed as more effective by the respondents compared to the H1N1 vaccine. The "Don't know" category in both graphs suggests that there is a significant amount of uncertainty or lack of information among the respondents about the effectiveness of both vaccines.</p>

      <hr/>

      <p className="VisualizationContentHeading">Dependance of H1N1 Vaccination on Socioeconomic Factors:</p>
      <p className="VisualizationContentSubHeading">1. Age Group</p>
      <div className="H1N1_graph3"></div>
      <p className="VisualizationContent">Vaccination rates appear to increase with age, with the 65+ years age group showing the largest number of vaccinated respondents relative to other age groups. The age group with the lowest vaccination rate appears to be the 35-44 years group.</p>

      <p className="VisualizationContentSubHeading">2. Employment Status</p>
      <div className="H1N1_graph4"></div>
      <p className="VisualizationContent">Employment status appears to have an association with vaccination rates, with those "Not in Labor Force" and "Employed" having a higher number of unvaccinated individuals. The "Unemployed" group has the lowest overall numbers, which could indicate a smaller sample size or lower vaccination rates among this group. The disparity between vaccinated and unvaccinated individuals is particularly pronounced in the "Not in Labor Force" group, which could suggest various factors at play such as age, disability, or retirement status that may influence vaccination rates.</p>

      <p className="VisualizationContentSubHeading">3. Education Level</p>
      <div className="H1N1_graph5"></div>
      <p className="VisualizationContent">This chart suggests a correlation between education level and vaccination rates, indicating that individuals with higher education levels may be more likely to get vaccinated. This could be due to a variety of factors, such as better access to information, understanding of health and science, or socioeconomic status that often correlates with education level. These insights could be vital for public health officials in designing education and outreach programs tailored to different educational backgrounds to improve vaccination coverage.</p>

      <p className="VisualizationContentSubHeading">4. Income Level</p>
      <div className="H1N1_graph6"></div>
      <p className="VisualizationContent">Income level seems to correlate with vaccination rates, with higher income brackets possibly having better access to vaccines or more inclination to get vaccinated. Despite the absolute numbers, the proportion of vaccinated to not vaccinated in the highest income bracket suggests that increased income could be associated with higher vaccination rates. The group earning less than $75000 but above poverty represents the largest segment in terms of raw numbers for both vaccinated and not vaccinated, indicating this group may be the most significant target for public health interventions.</p>

      <hr/>

      <p className="VisualizationContentHeading">Dependance of Seasonal Flu Vaccination on Socioeconomic Factors:</p>
      <p className="VisualizationContentSubHeading">1. Age Group</p>
      <div className="H1N1_graph7"></div>
      <p className="VisualizationContent">The graph suggests a trend where the likelihood of having received the seasonal flu vaccine increases with age. Younger age groups appear to have lower vaccination rates, while older individuals show much higher rates of vaccination. This could be due to several factors, such as increased risk of complications from the flu in older adults, making vaccination more common in this demographic.</p>

      <p className="VisualizationContentSubHeading">2. Employment Status</p>
      <div className="H1N1_graph8"></div>
      <p className="VisualizationContent">From this graph, we can infer that employment status is a factor in seasonal vaccination rates, with employed individuals being more likely to be vaccinated than those not in the labor force or unemployed. This might suggest that employed individuals have better access to vaccines, possibly through workplace vaccination programs, or they might prioritize vaccination due to workplace requirements or health benefits. Conversely, the lower rates of vaccination among the unemployed could be due to factors like lower access to healthcare services or other priorities.</p>

      <p className="VisualizationContentSubHeading">3. Education Level</p>
      <div className="H1N1_graph9"></div>
      <p className="VisualizationContent">This data indicates that higher education levels might be associated with higher rates of seasonal flu vaccination. In particular, respondents with a college degree are more likely to be vaccinated than those with less education. This trend could be due to a variety of factors, including increased health awareness and access to health resources among individuals with higher education levels.</p>

      <p className="VisualizationContentSubHeading">4. Income Level</p>
      <div className="H1N1_graph10"></div>
      <p className="VisualizationContent">Income appears to be a factor in the likelihood of getting vaccinated, with lower-income groups showing a lower rate of vaccination. The difference in vaccination rates is less pronounced in the highest income bracket, suggesting that higher income may be associated with better access to healthcare or greater health-seeking behavior. Overall, even at higher income levels, there seems to be a substantial number of individuals who are not getting vaccinated, indicating that factors other than income might also play a significant role in the decision to get vaccinated.</p>

    </div>
  );
}

export default Visualisations;