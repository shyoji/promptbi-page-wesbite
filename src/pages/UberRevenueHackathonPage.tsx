import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function UberRevenueHackathonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute top-0 left-0 w-32 h-64 bg-blue-500 rounded-full"></div>
                <div className="absolute top-32 left-20 w-32 h-64 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-0 left-40 w-24 h-24 bg-blue-300 rounded-full"></div>
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uber Revenue Growth Hackathon: Data-Driven Analysis Framework
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
                A comprehensive analytical approach to increase revenue by 25% through ride pattern optimization, cancellation reduction, and strategic resource allocation
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Context & Objective</h2>
            <h3 className="text-3xl font-semibold mb-8">Defining the Business Challenge</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Business Problem</h4>
                <p className="text-gray-300 leading-relaxed">
                  Uber wants to increase revenue by 25%. The challenge is to analyze ride patterns, cancellations, vehicle utilization, fare structures, and payment behavior to identify actionable strategies for revenue growth.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Key Stakeholders</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Executive leadership team (CEO, CFO, COO)</li>
                  <li>Regional operations managers</li>
                  <li>Driver operations and retention teams</li>
                  <li>Marketing and demand planning teams</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Decision Impact</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Dynamic pricing and fare adjustments</li>
                  <li>Resource allocation for drivers and fleet optimization</li>
                  <li>Targeted marketing in high-demand areas</li>
                  <li>Strategies to reduce cancellations and improve customer retention</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Critical Success Metrics</h3>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Primary KPIs</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Total revenue per city / per vehicle type</li>
                  <li>Ride completion rate (cancellations reduction)</li>
                  <li>Average fare per ride</li>
                  <li>Customer satisfaction (ratings)</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold">Why This Matters:</span> Optimizing ride operations directly drives top-line revenue, improves customer experience, reduces operational inefficiencies, and helps Uber allocate resources strategically across cities and vehicle types.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Data Understanding & Scope</h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Required Data Elements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Ride metadata (booking ID, timestamp, city)</li>
                <li>Vehicle type and ride distance</li>
                <li>Ride status (completed/cancelled)</li>
                <li>Fare, payment method, and customer rating</li>
                <li>Driver ID (to measure driver availability and performance)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Expected Dataset Contents</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Daily ride bookings across multiple cities</li>
                <li>Completed and cancelled rides</li>
                <li>Fare and distance details</li>
                <li>Customer ratings</li>
                <li>Payment methods</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Data Limitations & External Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Data Gaps</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Missing data for cancelled rides (no fare/distance)</li>
                  <li>Possible inconsistencies in rating or payment method entries</li>
                  <li>No detailed customer demographics or traffic/weather info</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Impact on Analysis</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Could distort revenue calculations and average fare</li>
                  <li>Impact cancellation and ride demand analysis</li>
                  <li>May misinform resource allocation or pricing strategies</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">External Influences</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Weather conditions and seasonal trends</li>
                  <li>Local events or holidays</li>
                  <li>Competitor promotions or pricing</li>
                  <li>Traffic patterns and city regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Hypothesis Formation & Strategic Focus</h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Expected Patterns & Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">01 Peak Demand Patterns</h4>
                  <p className="text-gray-700">Higher demand during peak hours and weekdays in major cities</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">02 Premium Vehicle Performance</h4>
                  <p className="text-gray-700">Higher fares and completion rates for premium vehicles (UberXL, Premier)</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">03 Cancellation Drivers</h4>
                  <p className="text-gray-700">Increased cancellations in areas with fewer available drivers</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">04 Payment Preferences</h4>
                  <p className="text-gray-700">Payment method trends (credit card vs cash vs mobile wallet)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Root Cause Hypotheses</h3>
                <p className="font-semibold mb-4 text-gray-900">Possible reasons for the business problem:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Inefficient vehicle allocation in high-demand areas</li>
                  <li>Pricing not optimized dynamically</li>
                  <li>High cancellation rates reducing revenue</li>
                  <li>Uneven distribution of vehicle types across cities</li>
                </ul>

                <h4 className="text-lg font-semibold mt-8 mb-4 text-gray-900">Alternative Hypotheses to Test</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Dynamic pricing could increase revenue during peak demand periods</li>
                  <li>Certain cities have untapped demand where adding drivers will improve revenue</li>
                  <li>Improved driver retention leads to higher completion rates</li>
                  <li>Payment method preferences influence ride frequency and customer retention</li>
                </ul>
              </div>

              <div>
                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Most Important Variables</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Ride distance and fare</li>
                    <li>Vehicle type</li>
                    <li>Ride status (completed/cancelled)</li>
                    <li>City and timestamp</li>
                    <li>Payment method and rating</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Potential Strategic Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Dynamic Pricing Optimization</h4>
                <p className="text-gray-700">Adjust fares based on city, time, and demand.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Cancellation Reduction & Driver Retention</h4>
                <p className="text-gray-700">Identify patterns causing cancellations and address them.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Fleet & Market Expansion</h4>
                <p className="text-gray-700">Deploy more vehicles in high-demand areas, optimize vehicle types.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Peak Demand Forecasting</h4>
                <p className="text-gray-700">Predict surges to allocate resources efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Critical Thinking, KPIs, & Stakeholder Communication</h2>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
              This section focuses on strategic questioning, deep dive into Key Performance Indicators, and effective executive communication for the Uber revenue analysis, translating insights into actionable strategies.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Revenue & Growth</h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">1 Q1: How confident are you that your strategies can achieve 25% revenue growth?</h3>
                <p className="text-gray-700">A: I am confident that a combined approach of dynamic pricing, optimized fleet allocation, and targeted cancellation reduction can drive this growth. Scenario modeling shows that even moderate improvements in each area cumulatively approach the 25% target.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">2 Q2: Which revenue streams or ride types have the most potential for improvement?</h3>
                <p className="text-gray-700">A: Premier and XL rides yield higher revenue per trip. UberX has high volume but lower margin. Optimizing peak pricing for UberX and incentivizing Premier rides can maximize revenue.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">3 Q3: What assumptions have you made in your analysis, and how would you validate them?</h3>
                <p className="text-gray-700">A: Assumptions include stable demand patterns, predictable cancellation behavior, and moderate price elasticity. Validation will come from A/B testing dynamic pricing and monitoring changes in ride completion and revenue.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">4 Q4: How would your conclusions change if cancellation rates or demand differ from your expectations?</h3>
                <p className="text-gray-700">A: If cancellations are higher, revenue gains may be lower. To mitigate, I would prioritize predictive fleet allocation and surge incentives. If demand is higher than expected, we can capitalize through dynamic pricing and temporary fleet augmentation.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">5 Q5: Which variables or metrics are most critical to achieving revenue growth?</h3>
                <p className="text-gray-700">A: Ride completion rate, fare per ride, ride distance, peak demand times, and vehicle-type allocation are key. Monitoring these metrics ensures interventions have measurable impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Operations & Efficiency</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4 font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Q6: How would you reduce ride cancellations without increasing operational costs?</h3>
                <p className="text-gray-700">A: By predicting high-cancellation zones and proactively rebalancing drivers, offering timely ETA updates, and using targeted driver incentives, we can reduce cancellations with minimal cost impact.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4 font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Q7: How can fleet allocation be optimized to meet peak demand efficiently?</h3>
                <p className="text-gray-700">A: Analyze historical ride demand by city, time, and day; then dynamically redistribute vehicles to high-demand areas during peak hours. Forecasting allows proactive positioning of drivers.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4 font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Q8: What patterns in ride demand did you notice across different cities or times?</h3>
                <p className="text-gray-700">A: Peak demand occurs 639 AM and 538 PM weekdays. Certain cities like New York and San Francisco have more pronounced morning and evening peaks, while Miami and Austin show higher weekend demand.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4 font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Q9: Which cities or areas show untapped demand potential, and why?</h3>
                <p className="text-gray-700">A: Miami and San Francisco exhibit periods of high ride requests with insufficient driver coverage, indicating unmet demand. Strategic driver reallocation or temporary surge promotions could capture this revenue.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Customer & Market Insights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">1 Q10: How do customer ratings and feedback impact revenue or retention strategies?</h3>
                <p className="text-gray-700">A: Higher-rated rides correlate with repeat usage. Ensuring high-quality service in high-volume areas drives retention and higher lifetime value. Monitoring feedback allows targeted interventions.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">2 Q11: How do payment methods influence ride frequency, repeat usage, or revenue?</h3>
                <p className="text-gray-700">A: Mobile wallet users tend to book more frequently, while credit card users generate higher average fares. Promotions or incentives can be tailored per payment segment to maximize revenue.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">3 Q12: What risks or uncertainties could undermine your proposed strategies?</h3>
                <p className="text-gray-700">A: Regulatory changes on surge pricing, sudden driver shortages, or competitor promotions could impact expected growth. Mitigation involves scenario planning and flexible operational strategies.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Communication & Decision Support</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">1 Q13: How would you present your findings to leadership to ensure actionable decisions?</h3>
                <p className="text-gray-700">A: I would use a concise dashboard with KPIs, visualizations of demand vs. supply, revenue impact scenarios, and clearly defined recommendations for pricing, fleet allocation, and cancellation reduction.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">2 Q14: Which initiatives should be prioritized to maximize impact with limited resources?</h3>
                <p className="text-gray-700">A: Start with dynamic pricing in high-volume cities, followed by predictive fleet allocation and targeted cancellation reduction strategies, as these provide the fastest, measurable revenue impact.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">3 Q15: How would you respond if leadership challenges your assumptions or results?</h3>
                <p className="text-gray-700">A: I would present data-driven justifications, sensitivity analyses, and alternative scenarios. I'd also be open to iterating the approach based on their feedback and additional insights they provide.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Evaluation Criteria</h2>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
              Our gamified assessment framework ensures a transparent and thorough evaluation of your skills, designed to challenge and bring out your best. Each stage contributes to your overall score, providing a clear pathway to demonstrate your analytical prowess.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex-1 bg-gray-900 h-2 rounded-full"></div>
                  <span className="ml-4 text-2xl font-bold text-gray-900">25%</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Pre-processing & Problem Understanding</h3>
                <p className="text-gray-700">Ask the right questions and define objectives.</p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="flex-1 bg-gray-900 h-2 rounded-full"></div>
                  <span className="ml-4 text-2xl font-bold text-gray-900">15</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Data Analysis & Coding</h3>
                <p className="text-gray-700">Python & Pandas proficiency, efficiency, and correctness.</p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="flex-1 bg-gray-900 h-2 rounded-full"></div>
                  <span className="ml-4 text-2xl font-bold text-gray-900">20%</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Insight Generation & Dashbording</h3>
                <p className="text-gray-700">Clear storytelling, logical reasoning, business impact.</p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="flex-1 bg-gray-900 h-2 rounded-full"></div>
                  <span className="ml-4 text-2xl font-bold text-gray-900">40</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Executive Simulation</h3>
                <p className="text-gray-700">Defend insights under pressure, answer tough questions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Rewards & Recognition</h2>
            <p className="text-xl text-center mb-16 max-w-4xl mx-auto">
              Unlock your potential and be recognized for your achievements in our gamified assessment journey. Here's what awaits the top performers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Top 300</h3>
                <p className="text-white/90 leading-relaxed">
                  Secure an exclusive internship with a competitive stipend of 30,000 KES/month for a full 12 months. This is your chance to gain invaluable experience and kickstart your career.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Leaderboard</h3>
                <p className="text-white/90 leading-relaxed">
                  See your progress in real-time! Our dynamic leaderboard tracks your points, fostering a competitive and engaging environment. Climb to the top and earn bragging rights.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Mentorship</h3>
                <p className="text-white/90 leading-relaxed">
                  Gain unparalleled access to senior data engineers from industry giants like Uber, Tesla, and Disney. Learn from the best and accelerate your growth with personalized guidance.
                </p>
              </div>
            </div>

            <p className="text-center text-lg">
              Embrace the challenge, earn your badges, and progress towards an exciting career. Every step you take brings you closer to these incredible rewards!
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
