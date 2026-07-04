import { useState } from "react";
import { FaRulerVertical, FaWeight } from "react-icons/fa";

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const h = parseFloat(height) / 100; // cm to meters
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const bmi = (w / (h * h)).toFixed(1);
      let status = "";
      let color = "";
      if (bmi < 18.5) {
        status = "Underweight";
        color = "text-[#3498db]";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal Weight";
        color = "text-[#2ecc71]";
      } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
        color = "text-[#f1c40f]";
      } else {
        status = "Obese";
        color = "text-[#e74c3c]";
      }
      setResult({ bmi, status, color });
    }
  };

  const inputClasses =
    "w-full pl-11 pr-4 py-3.5 bg-[#121414] border border-white/10 rounded-lg text-white font-inter text-sm text-center outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all duration-300 appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0";

  return (
    <section className="relative py-24 bg-[#0d0e0f] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full flex flex-col items-center relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#E50914]" />
            <p className="font-inter text-xs text-[#E50914] tracking-[0.2em] uppercase font-bold">Know Your Body</p>
            <span className="w-8 h-[2px] bg-[#E50914]" />
          </div>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,5vw,48px)] text-white tracking-tight leading-tight mb-6">
            CALCULATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">YOUR BMI</span>
          </h2>
          <p className="font-inter text-base text-[#a0a0a0] leading-relaxed">
            Body Mass Index (BMI) is a simple calculation using your height and weight. Understand your body better and let us help you achieve the perfect balance of strength and health.
          </p>
        </div>

        {/* Main Calculator Container */}
        <div className="w-full max-w-xl flex flex-col items-center">

          {/* Calculator Card */}
          <div className="w-full bg-[#1a1c1d] border border-white/5 shadow-2xl p-8 md:p-10 rounded-2xl relative overflow-hidden group flex flex-col items-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E50914] to-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <form onSubmit={calculateBmi} className="flex flex-col items-center gap-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Height Input */}
                <div className="flex flex-col items-center">
                  <label className="block font-inter text-xs text-[#8c8c8c] tracking-wider uppercase mb-3 font-semibold text-center">Height (cm)</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaRulerVertical className="text-[#E50914]" />
                    </div>
                    <input
                      type="number"
                      placeholder="175"
                      value={height}
                      onChange={e => setHeight(e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Weight Input */}
                <div className="flex flex-col items-center">
                  <label className="block font-inter text-xs text-[#8c8c8c] tracking-wider uppercase mb-3 font-semibold text-center">Weight (kg)</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaWeight className="text-[#E50914]" />
                    </div>
                    <input
                      type="number"
                      placeholder="70"
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${result ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                {result && (
                  <div className="p-6 bg-gradient-to-br from-[#E50914]/10 to-transparent border border-[#E50914]/20 rounded-xl relative overflow-hidden text-center">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#E50914]/15 rounded-full blur-2xl"></div>
                    <div className="flex items-center justify-center gap-10 relative z-10">
                      <div className="flex flex-col items-center">
                        <div className="font-inter text-xs text-[#a0a0a0] uppercase tracking-[0.15em] mb-1">Your BMI Result</div>
                        <div className="font-montserrat font-extrabold text-4xl text-white">{result.bmi}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="font-inter text-xs text-[#a0a0a0] uppercase tracking-[0.15em] mb-1">Status</div>
                        <div className={`font-inter text-lg font-bold ${result.color}`}>{result.status}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Calculate Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E50914] to-red-600 text-white border-none py-4 font-montserrat font-bold text-sm tracking-[0.1em] uppercase cursor-pointer rounded-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Calculate BMI
              </button>

              {/* BMI Categories Reference - inside calculator card */}
              <div className="w-full bg-[#121414] border border-white/5 rounded-xl p-6 shadow-2xl mt-2">
                <h3 className="font-montserrat text-white font-bold mb-4 text-center">BMI Categories</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-3 bg-white/2 rounded-lg border border-white/5 hover:border-[#3498db]/30 transition-all">
                    <span className="text-xs text-[#a0a0a0] mb-1">Below 18.5</span>
                    <span className="text-[#3498db] text-xs font-semibold bg-[#3498db]/10 px-2.5 py-1 rounded-full">Underweight</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/2 rounded-lg border border-white/5 hover:border-[#2ecc71]/30 transition-all">
                    <span className="text-xs text-[#a0a0a0] mb-1">18.5 - 24.9</span>
                    <span className="text-[#2ecc71] text-xs font-semibold bg-[#2ecc71]/10 px-2.5 py-1 rounded-full">Normal</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/2 rounded-lg border border-white/5 hover:border-[#f1c40f]/30 transition-all">
                    <span className="text-xs text-[#a0a0a0] mb-1">25.0 - 29.9</span>
                    <span className="text-[#f1c40f] text-xs font-semibold bg-[#f1c40f]/10 px-2.5 py-1 rounded-full">Overweight</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/2 rounded-lg border border-white/5 hover:border-[#e74c3c]/30 transition-all">
                    <span className="text-xs text-[#a0a0a0] mb-1">30.0 & Above</span>
                    <span className="text-[#e74c3c] text-xs font-semibold bg-[#e74c3c]/10 px-2.5 py-1 rounded-full">Obese</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}