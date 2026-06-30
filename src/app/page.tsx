import PeriodicTable from "@/components/PeriodicTable";
import Quiz from "@/components/Quiz";
import Flashcards from "@/components/Flashcards";
import ProgressPanel from "@/components/ProgressPanel";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-xl border p-4">
        <h1 className="text-2xl font-semibold">Learn the Periodic Table</h1>
        <p className="text-gray-600 mt-1">
          Click an element to learn. Then practice with quizzes and flashcards.
        </p>
      </section>

      <section>
        <PeriodicTable />
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border p-4">
          <Quiz />
        </div>
        <div className="bg-white rounded-xl border p-4">
          <Flashcards />
        </div>
      </section>

      <section>
        <ProgressPanel />
      </section>
    </div>
  );
}
