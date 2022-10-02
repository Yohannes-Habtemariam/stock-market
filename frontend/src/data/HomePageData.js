import React from "react";

import MovingAverageConvergenceDivergence from "../images/macd-indicator.png";
import RelativeStrengthIndex from "../images/RSI-indicator.png";
import arronIndicator from "../images/arron-indicator.png"
import AverageDirectionalIndex from "../images/ADX-indicator.png";
import WeightedMovingAverage from "../images/WeightedMovingAverage.png";
import ExponentialMovingAverage from "../images/ExponentialMovingAverage.png";

import macroEnvironmentAnalysis from "../images/macroEnvironmentalAnalysis1.png";
import industryAnalysis from "../images/industryAnalysis.jpeg";
import companyAnalysis from "../images/companyAnalysis.png";


export const technicalAnalysis = [
  {
    image: MovingAverageConvergenceDivergence,
    heading: "Moving average convergence divergence",
    paragraph:
      "Moving average convergence divergence (MACD) is a trend-following momentum indicator that shows the relationship between two moving averages of a security’s price. The MACD is calculated by subtracting the 26-period EMA from the 12-period EMA. The result of that calculation is the MACD line. A nine-day EMA of the MACD called the signal line, is plotted on top of the MACD line, which function as a for buy and sell signals.",
    readMore: <a href="https://www.investopedia.com/terms/m/macd.asp" target="_blank"> Read More ... </a>
  },

  {
    image: RelativeStrengthIndex,
    heading: "Relative Strength Index",
    paragraph:
      "The Relative Strength Index (RSI) is one of the most popular and widely used momentum oscillators. The RSI measures both the speed and rate of change in price movements within the market. The values of the RSI oscillator, typically measured over a 14-day period, fluctuate between zero and 100. The Relative Strength Index indicates oversold market conditions when below 30 and overbought market conditions when above 70.",
    readMore: <a href="https://www.investopedia.com/terms/r/rsi.asp" target="_blank"> Read More ... </a>
  },

  {
    image: arronIndicator,
    heading: "Aroon Indicator",
    paragraph: 
      "The Aroon indicator is a technical indicator that is used to identify trend changes in the price of an asset, as well as the strength of that trend. In essence, the indicator measures the time between highs and the time between lows over a time period. The idea is that strong uptrends will regularly see new highs, and strong downtrends will regularly see new lows. The indicator signals when this is happening, and when it isn't. ",
    readMore: <a href="https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/aroon-indicator#:~:text=The%20Aroon%20indicator%2C%20developed%20by,from%20trading%20ranges%20to%20trends." target="_blank"> Read More ... </a>
  },

  {
    image: AverageDirectionalIndex,
    heading: "Average Directional Index",
    paragraph:
      "The average directional index (ADX) is a technical analysis indicator used by some traders to determine the strength of a trend. The trend can be either up or down, and this is shown by two accompanying indicators, the negative directional indicator (-DI) and the positive directional indicator (+DI). Therefore, the ADX commonly includes three separate lines. These are used to help assess whether a trade should be taken long or short, or if a trade should be taken at all.",
    readMore: <a href="https://www.investopedia.com/articles/trading/07/adx-trend-indicator.asp" target="_blank"> Read More ... </a>
  },

  {
    image: WeightedMovingAverage,
    heading: "Weighted Moving Average",
    paragraph:
      "A Weighted Moving Average (WMA) is a type of moving average that puts more weight on recent data and less on past data. Because of its unique calculation, WMA will follow prices more closely than a Simple Moving Average (SMA). WMA also puts greater importance on recent data than the Exponential Moving Average (EMA) by assigning values that are linearly weighted to ensure that the most recent prices have a greater impact on the average than older prices.",
    readMore: <a href="https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/wma#:~:text=Description,a%20corresponding%20Simple%20Moving%20Average." target="_blank"> Read More ... </a>
  },

  {
    image: ExponentialMovingAverage,
    heading: "Exponential Moving Average",
    paragraph:
      "An exponential moving average (EMA) is a type of moving average (MA) that places a greater weight and significance on the most recent data points. The exponential moving average is also referred to as the exponentially weighted moving average. An exponentially weighted moving average reacts more significantly to recent price changes than a simple moving average simple moving average (SMA), which applies an equal weight to all observations in the period.",
    readMore: <a href="https://www.investopedia.com/ask/answers/122314/what-exponential-moving-average-ema-formula-and-how-ema-calculated.asp#:~:text=The%20exponential%20moving%20average%20(EMA)%20is%20a%20technical%20chart%20indicator,importance%20to%20recent%20price%20data." target="_blank"> Read More ... </a>
  },
];


export const fundamentalAnalyses = [
  {
    image: macroEnvironmentAnalysis,
    heading: "Macro Environment Analysis ",
    paragraph:
      "Macro environment analysis is part of strategic management and involves identifying and analyzing potential opportunities and threats that arise in the macro-environment. Macro environment includes the gross domestic product (GDP), inflation, employment, spending, and monetary and fiscal policy. The macro-environment is closely linked to the general business cycle as opposed to the performance of an individual business sector. An organization’s macro-environment refers to all major, uncontrollable, external forces of a company that directly or indirectly influence decision-making. These are often economic, demographic, technological, political, natural, cultural, social or legal forces. Its main purpose is to provide management with accurate information to help them make operational decisions.",
    readMore: <a href="https://www.investopedia.com/terms/m/macro-environment.asp#:~:text=Macro%20environment%20analysis%20is%20part,them%20in%20making%20operational%20decisions." target="_blank"> Read More ... </a>
  },

  {
    image: industryAnalysis,
    heading: "Industry Analysis",
    paragraph:
      "Industry analysis refers to the analysis of the industry’s environment that guides the industry to grow and survive in a competitive environment and gain a competitive edge in the industry as it predicts the future and changes in the market and analyzes the threats and opportunities in the way ahead and making decisions and planning accordingly. There’re many frameworks we can use to do industry analysis. But what’s more important is to follow a few steps and get to the point where one can use the frameworks to assess the correct picture of the industry. The tools that could help you to conduct industry analysis includes Intensity of Industry Rival, Threat of Potential Entrants, Bargaining Power of Suppliers, Bargaining Power of Buyers, and Threat of Substitute Goods/Services.",
    readMore: <a href="https://www.upcounsel.com/industry-analysis" target="_blank"> Read More ... </a>
  },

  {
    image: companyAnalysis,
    heading: "Company Analysis",
    paragraph:
      "Company analysis is a process carried out by investors to evaluate securities, collecting info related to the company's profile, products and services as well as profitability. It looks into the goods and services proffered by the company. If the company is involved in manufacturing activities, the analysis studies the products produced by the company and also analyzes the demand and quality of these products. Conversely, if it is a service business, the investor studies the services put forward. Company analysis is a process/study that gives the status-quo of the company’s performance. It presents the ‘on paper’ value of the company from a productivity and financial point of view, giving a comprehensive picture of where the company stands in the market and amongst its competitors.",
    readMore: <a href="https://getlucidity.com/strategy-resources/the-best-strategy-tools-to-analyze-your-market-and-business/" target="_blank"> Read More ... </a>
  },
];