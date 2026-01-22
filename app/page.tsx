import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Calendar, Trophy, FileText } from "lucide-react"
import Link from "next/link"

export default function TodoScreen() {
  return (
    <div className="bg-slate-100 flex flex-col relative">
      {/* Header */}
      <div className="relative bg-indigo-700 text-white px-6 pt-6 pb-24 rounded-b-[32px] overflow-hidden z-10">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
        <button className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-700">
          <ChevronLeft />
        </button>
        <p className="relative z-10 text-center text-sm mt-4">October 20, 2022</p>
        <h1 className="relative z-10 text-center text-3xl font-bold mt-2">My Todo List</h1>
      </div>

      {/* Todo list - now with more bottom padding to prevent content hiding under FAB */}
      <div className="flex-1 -mt-16 px-4 space-y-6 pb-24 relative z-20 overflow-y-auto">
        <Card className="divide-y">
          <TodoItem icon={<FileText />} title="Study lesson" />
          <TodoItem icon={<Trophy />} title="Run 5k" time="4:00pm" />
          <TodoItem icon={<Calendar />} title="Go to party" time="10:00pm" />
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-3">Completed</h2>
          <Card className="divide-y opacity-70">
            <TodoItem icon={<Calendar />} title="Game meetup" time="1:00pm" completed />
            <TodoItem icon={<FileText />} title="Take out trash" completed />
          </Card>
        </div>
      </div>

      {/* Floating Action Button */}
      <Link href="/new">
        <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-sm px-4 z-30 pointer-events-none">
          <Button
            className="
            w-full max-w-sm rounded-full h-14 text-lg 
            bg-indigo-700 hover:bg-indigo-800 
            shadow-lg shadow-indigo-700/30
            pointer-events-auto
          "
          >
            Add New Task
          </Button>
        </div>
      </Link>
    </div>
  )
}

function TodoItem({
  icon,
  title,
  time,
  completed,
}: {
  icon: React.ReactNode
  title: string
  time?: string
  completed?: boolean
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${completed ? "bg-slate-200" : "bg-indigo-100"
            }`}
        >
          {icon}
        </div>
        <div>
          <p
            className={`font-medium ${completed ? "line-through text-slate-400" : "text-slate-900"
              }`}
          >
            {title}
          </p>
          {time && (
            <p className={`text-sm text-slate-500 ${completed ? "line-through" : ""}`}>
              {time}
            </p>
          )}
        </div>
      </div>
      <Checkbox checked={completed} />
    </div>
  )
}