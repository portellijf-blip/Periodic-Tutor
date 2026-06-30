import ProgressPanel from "@/components/ProgressPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Your Progress</h1>
      <ProgressPanel />
    </div>
  );
}
