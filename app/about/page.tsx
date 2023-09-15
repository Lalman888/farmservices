import React from 'react'

function page() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-600 mb-6">
          In order to help smallholder farmers escape poverty, a global development organisation called Grain Nexus uses partnerships at the local level as well as the combined power of technology.
        </p>
        <p className="text-gray-600 mb-6">
          Farmers are much more likely to put what they've learned to use on their farms and in their homes when they have the tools necessary to connect with one another. This improves both their own and others' quality of life in a way that is inclusive, nutrition-sensitive, and climate-resilient.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Mission</h2>
        <ul className="list-disc pl-6">
          
        <h4>The mission of GrainNexus is to empower Indian farmers through technology, data, and market access, fostering sustainable agriculture and improving rural livelihoods.</h4>
          {/* Add more mission points */}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
        <p className="text-gray-600">
           <ul className="list-disc pl-6">
          
        <h4>The vision of GrainNexus is to revolutionize Indian agriculture by creating a digitally connected ecosystem that maximizes productivity, minimizes losses, and uplifts the lives of farmers across the nation.</h4>
          {/* Add more mission points */}
        </ul>
         
          
        </p>
      </div>


       <div className="max-w-4xl mx-auto my-8">
        <h1 className="text-3xl font-semibold mb-4">GrainNexus and its capabilities in weather conditions and AI:</h1>
      
        <h2 className="text-2xl font-semibold mb-4">1.	Weather Conditions:</h2>
        <ul className="list-disc pl-6">
          <li>
            	"GrainNexus provides real-time weather updates to farmers, enabling them to make timely decisions on irrigation and planting."
          </li>
          <li>	"With GrainNexus, farmers can monitor local weather forecasts, helping them prepare for sudden changes and protect their crops."</li>
          <li>"GrainNexus uses advanced weather data to offer personalized recommendations, ensuring farmers are well-informed about weather conditions affecting their specific crops."
        </li>
      
          {/* Add more mission points */}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">2.	AI:</h2>
        <p className="text-gray-600">
           <ul className="list-disc pl-6">
          
         <li>	"GrainNexus employs cutting-edge AI technology to detect pests and diseases in crops, allowing for early intervention and reducing crop losses."


          </li>
          <li>	"Through AI-driven pest detection, GrainNexus helps farmers identify potential threats in their fields, ultimately improving crop health."</li>
          <li>
"GrainNexus is at the forefront of agricultural innovation, leveraging AI to provide farmers with data-driven insights that enhance productivity and sustainability."
        </li>

          {/* Add more mission points */}

        </ul>
         
          
        </p>
      </div>


      

    </div>
  );
}

export default page