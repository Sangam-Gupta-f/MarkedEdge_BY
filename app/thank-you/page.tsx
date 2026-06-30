export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold text-lime-400">Thank You!</h1>

      <p className="mt-4 text-lg text-gray-300 text-center">
        Your strategy call has been booked successfully.
      </p>

      <p className="mt-2 text-gray-400 text-center">
        We've sent the meeting details to your email. See you soon!
      </p>
    </div>
  );
}
