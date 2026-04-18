import { CheckCircle, FileText, LogIn, Save, Zap } from "lucide-react";
import banner from "../../assets/Paybill/paybill-banner.jpg";
import bkash from "../../assets/Paybill/bkash-pay.png";
import nagad from "../../assets/Paybill/nagad-pay.jpg";
import StepCard from "./StepCard";
import { motion } from "framer-motion";
export default function PayBillPage() {
  const bkashSteps = [
    {
      icon: LogIn,

      description: (
        <>
          Login to your bKash account with your account's PIN number and tap on{" "}
          <span className="text-red-600">"পে বিল"</span> option.
        </>
      ),
    },
    {
      icon: Zap,

      description: (
        <>
          In
          <span className="text-red-600">"পে বিল"</span>
          option you'll find <span className="text-red-600">"Mirpur Tech"</span>
          . Simply tap on it and follow the next step.
        </>
      ),
    },
    {
      icon: FileText,

      description: (
        <>
          Now select your internet billing timeline in{" "}
          <span className="text-red-600">"বিল সময়সীমা"</span> box & input your
          customer in "বিল একাউন্ট নম্বর দিন" box.
        </>
      ),
    },
    {
      icon: Save,

      description: (
        <>
          If you want to save the payment info for quick payment, you can simple
          tick the checkbox{" "}
          <span className="text-red-600">
            "ভবিষ্যৎ বিল পেমেন্টের জন্য একাউন্টটি সেভ করে রাখুন"
          </span>{" "}
          .
        </>
      ),
    },
    {
      icon: CheckCircle,

      description: (
        <>
          After that, tap the{" "}
          <span className="text-red-600">"পে বিল করতে এগিয়ে যান"</span> button &
          hold the pay button for a few second. You're done!
        </>
      ),
    },
  ];
  const nagadSteps = [
    {
      icon: LogIn,
      description: (
        <>
          Login to your Nagad account and tap on the{" "}
          <span className="text-red-600">"Merchant Pay" (মার্চেন্ট পে)</span>{" "}
          icon.
        </>
      ),
    },
    {
      icon: Zap,
      description: (
        <>
          Enter the Merchant Account Number{" "}
          <span className="text-red-600">" 01676-162532"</span> (Mirpur Tech) or
          scan the QR code.
        </>
      ),
    },
    {
      icon: FileText,
      description: (
        <>
          Type the bill amount in "Amount" and your User ID in the{" "}
          <span className="text-red-600">"Reference" (রেফারেন্স)</span> box.
        </>
      ),
    },
    {
      icon: CheckCircle,
      description: (
        <>
          Enter your PIN, then tap and hold the{" "}
          <span className="text-red-600">"Tap to Pay"</span> button to complete
          the transaction.
        </>
      ),
    },
  ];
  return (
    <div>
      <header className="relative overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <img
            src={banner}
            alt="Coverage Areas Banner"
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center text-center px-4 py-24 md:py-32 lg:py-40">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
            >
              Payment Made Easy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 mt-4 text-sm md:text-base max-w-xl mx-auto"
            >
              Pay conveniently through internet or mobile banking and have your
              bills automatically updated with Mirpur Tech’s seamless billing
              system. Follow these simple steps to complete your payment online.
            </motion.p>
          </div>
        </div>
      </header>
      <main className="my-20 space-y-4">
        <div className="hero bg-white min-h-max">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={bkash} className="md:max-w-xl rounded-lg shadow border" />
            <div className="space-y-6">
              <h1 className="lg:text-5xl md::text-4xl text-3xl font-bold">
                Pay Bill through bKash
              </h1>
              <div>
                <div className="border border-red-100 rounded-lg p-3 ">
                  {bkashSteps.map((step, index) => (
                    <StepCard
                      key={index}
                      step={step}
                      index={index}
                      steps={bkashSteps}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero bg-white min-h-max">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={nagad} className="md:max-w-xl rounded-lg shadow border" />
            <div className="space-y-6">
              <h1 className="lg:text-5xl md::text-4xl text-3xl font-bold">
                Pay Bill through Nagad
              </h1>
              <div>
                <div className="border border-red-100 rounded-lg p-3 ">
                  {nagadSteps.map((step, index) => (
                    <StepCard
                      key={index}
                      step={step}
                      index={index}
                      steps={nagadSteps}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
