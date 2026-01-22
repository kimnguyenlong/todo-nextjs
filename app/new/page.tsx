import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Calendar, Trophy, FileText,
    X,
    Clock
} from "lucide-react"

export default function AddTaskScreen() {
    return (
        <div className="mx-auto max-w-sm min-h-screen bg-slate-100 flex flex-col">
            {/* Header */}
            <div className="relative bg-indigo-700 text-white px-6 pt-6 pb-12 rounded-b-[32px] overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
                <button className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-700">
                    <X />
                </button>
                <h1 className="relative z-10 text-center text-xl font-semibold -mt-8">Add New Task</h1>
            </div>

            {/* Content */}
            <div className="px-4 pt-6 space-y-6 flex-1 overflow-y-auto">
                <div>
                    <label className="text-sm font-semibold text-slate-800">Task Title</label>
                    <Input placeholder="Task Title" className="mt-2 h-12 bg-white" />
                </div>

                <div>
                    <label className="text-sm font-semibold text-slate-800">Category</label>
                    <div className="flex gap-4 mt-3">
                        <CategoryIcon icon={<FileText />} active />
                        <CategoryIcon icon={<Calendar />} />
                        <CategoryIcon icon={<Trophy />} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold text-slate-800">Date</label>
                        <div className="relative mt-2">
                            <Input placeholder="Date" className="h-12 bg-white pr-10" />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-700" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-slate-800">Time</label>
                        <div className="relative mt-2">
                            <Input placeholder="Time" className="h-12 bg-white pr-10" />
                            <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-700" />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-slate-800">Notes</label>
                    <Textarea placeholder="Notes" className="mt-2 min-h-[160px] bg-white" />
                </div>

                {/* Save Button (part of the screen flow) */}
                <Button className="w-full h-14 rounded-full text-lg bg-indigo-700 hover:bg-indigo-800 mt-6">
                    Save
                </Button>
            </div>
        </div>
    )
}

function CategoryIcon({
    icon,
    active,
}: {
    icon: React.ReactNode
    active?: boolean
}) {
    return (
        <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition ${active
                ? "bg-indigo-100 border-indigo-700 text-indigo-700"
                : "bg-white border-slate-200 text-slate-500"
                }`}
        >
            {icon}
        </div>
    )
}
