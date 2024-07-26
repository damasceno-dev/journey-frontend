import {CircleCheck, CircleDashed} from "lucide-react";
import {activity} from "./index.tsx";
import {addHours, format, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";



interface ActivitiesProps {
    activities : activity[];
}

export function Activities({activities} : ActivitiesProps) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function groupActivitiesByDate(activities: activity[]) {
        return activities.reduce((groupedActivities, activity) => {
            const dateKey = format(parseISO(activity.date), "yyyy-MM-dd");
            if (!groupedActivities[dateKey]) {
                groupedActivities[dateKey] = [];
            }
            groupedActivities[dateKey].push(activity);
            return groupedActivities;
        }, {} as Record<string, activity[]>);
    }

    const groupedActivities = groupActivitiesByDate(activities);
    const sortedDates = Object.keys(groupedActivities).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    
    return (
        <div className="space-y-8">
            {sortedDates.map(dateKey => {
                const dateActivities = groupedActivities[dateKey];
                const date = parseISO(dateKey);
                const formattedDate = format(date, 'd');
                const dayOfWeek = capitalizeFirstLetter(format(date, 'EEEE', { locale: ptBR }));

                return (
                    <div key={dateKey} className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Dia {formattedDate}</span>
                            <span className="text-xs text-zinc-500">{dayOfWeek}</span>
                        </div>
                        <div className="space-y-2.5">
                            {dateActivities.length > 0 && (
                                dateActivities.map(activity => {
                                    const adjustedDate = addHours(parseISO(activity.date), 3);
                                    return (
                                        <div key={activity.id} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                            {activity.status === 1 ? <CircleCheck className="size-5 text-lime-300"/> : <CircleDashed className="size-5 text-zinc-300"/>}
                                            <span className="text-zinc-100">{activity.name}</span>
                                            <span className="text-zinc-100 ml-auto">{format(adjustedDate, 'HH:mm')}h</span>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}