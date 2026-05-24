function SliderDots({ mode, setMode }) {
  return (
    <div className="mt-15 flex items-center gap-3">
      <button
        onClick={() => setMode("card1")}
        className={`h-3 w-3 rounded-full ${
          mode === "card1" ? "bg-[#043873]" : "bg-[#4F9CF9]"
        }`}
      />

      <button
        onClick={() => setMode("card2")}
        className={`h-3 w-3 rounded-full ${
          mode === "card2" ? "bg-[#043873]" : "bg-[#4F9CF9]"
        }`}
      />

      <button
        onClick={() => setMode("card3")}
        className={`h-3 w-3 rounded-full ${
          mode === "card3" ? "bg-[#043873]" : "bg-[#4F9CF9]"
        }`}
      />
    </div>
  );
}

export default SliderDots;