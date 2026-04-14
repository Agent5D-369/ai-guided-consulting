type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card">
      <summary className="cursor-pointer list-none pr-8 font-heading text-lg font-semibold text-white marker:hidden">
        {question}
      </summary>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{answer}</p>
    </details>
  );
}
