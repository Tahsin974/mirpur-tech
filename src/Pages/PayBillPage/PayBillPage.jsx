import { CheckCircle, FileText, LogIn, Save, Zap } from "lucide-react";
import banner from "../../assets/Paybill/paybill-banner.jpg";
import bkash from "../../assets/Paybill/bkash-pay.png";
import StepCard from "./StepCard";
export default function PayBillPage() {
  const steps = [
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
  return (
    <div>
      <header className="relative  ">
        <div className="absolute inset-0">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover bg-opacity-50"
          />
        </div>
        <div className="relative  lg:pb-32 md:pb-20 pb-16 lg:pt-32 md:pt-30 pt-24 -mt-24 px-5 md:px-8 lg:mt-0 bg-[#7c163b8c]">
          <h1 className="font-extrabold tracking-tight pt-12 lg:pt-0 text-white lg:text-5xl md:text-4xl text-4xl">
            Payment Made Easy
          </h1>
          <p className="lg:mt-6 md:mt-3 mt-6 lg:text-lg md:text-base text-lg text-indigo-100 max-w-4xl">
            Pay conveniently through internet or mobile banking and have your
            bills automatically updated with Mirpur Tech’s seamless billing
            system. Follow these simple steps to complete your payment online.
          </p>
        </div>
      </header>
      <main className="my-20">
        <div className="hero bg-white min-h-max">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={bkash} className="md:max-w-xl rounded-lg shadow border" />
            <div className="space-y-6">
              <h1 className="lg:text-5xl md::text-4xl text-3xl font-bold">
                Pay Bill through bKash
              </h1>
              <div>
                <div className="border border-red-100 rounded-lg p-3 ">
                  {steps.map((step, index) => (
                    <StepCard
                      key={index}
                      step={step}
                      index={index}
                      steps={steps}
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
