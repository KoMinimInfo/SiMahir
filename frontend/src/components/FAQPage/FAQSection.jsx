import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa itu Pengecatan Rumah?",
      answer:
        "Pengecatan Rumah adalah layanan yang memberikan kemudahan bagi Anda yang ingin mewarnai rumah Anda dengan warna yang baru. Kami menyediakan jasa pengecatan rumah dengan harga yang terjangkau dan hasil yang memuaskan.",
    },
    {
      question: "Apa saja layanan yang ditawarkan oleh Pengecatan Rumah?",
      answer:
        "Layanan yang ditawarkan oleh Pengecatan Rumah meliputi pengecatan dinding, pengecatan plafon, pengecatan pintu, pengecatan kusen, dan pengecatan pagar.",
    },
    {
      question: "Berapa lama waktu pengerjaan Pengecatan Rumah?",
      answer:
        "Waktu pengerjaan Pengecatan Rumah tergantung pada ukuran rumah Anda. Namun, rata-rata waktu pengerjaan Pengecatan Rumah adalah 1-2 hari.",
    },
    {
      question: "Bagaimana cara memesan layanan Pengecatan Rumah?",
      answer:
        "Anda dapat memesan layanan Pengecatan Rumah dengan mengunjungi website kami, memilih layanan Pengecatan Rumah, mengisi formulir pemesanan, dan melakukan pembayaran.",
    },
    {
      question: "Bagaimana cara melakukan pembayaran layanan Pengecatan Rumah?",
      answer:
        "Anda dapat melakukan pembayaran layanan Pengecatan Rumah melalui transfer bank atau kartu kredit.",
    },
  ];

  const [expandedAnswer, setExpandedAnswer] = useState(null);

  const toggleExpand = (index) => {
    setExpandedAnswer(expandedAnswer === index ? null : index);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="mx-14 my-28 flex flex-col gap-10">
      <h1 className="text-2xl font-semibold text-primary sm:text-4xl">
        FAQ(Frequently Asked Questions)
      </h1>
      <div className="space-y-px border-y bg-slate-200">
        {faqs.map((data, index) => (
          <div key={index} className="flex flex-col bg-white px-4 py-5">
            <div className="flex flex-row justify-between">
              <h1 className="text-lg font-medium text-primary">
                {index + 1}. {data.question}
              </h1>
              {data.answer.length > 160 && (
                <button onClick={() => toggleExpand(index)}>
                  {expandedAnswer === index ? (
                    <IoIosArrowDown size={30} className="my-auto" />
                  ) : (
                    <IoIosArrowForward size={30} className="my-auto" />
                  )}
                </button>
              )}
            </div>
            <p className="mt-2">
              {data.answer.length > 160
                ? expandedAnswer === index
                  ? data.answer
                  : truncateText(data.answer, 160)
                : data.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
