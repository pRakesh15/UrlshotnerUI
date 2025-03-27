import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Calendar, Link } from "lucide-react";
import axios from "axios";
import { baseUrl } from "@/main";
import { useContextStore } from "@/Context/ContextApi";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "../ui/card";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Audio } from "react-loader-spinner";

interface UrlProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    shortUrl: string;
}

// Define the type for our URL click data
interface UrlClickData {
    clickDate: string;
    count: number;
}

// Define type for date range state
interface DateRange {
    from: Date;
    to: Date;
}

function PersonalAnalysisModal({ open, setOpen, shortUrl }: UrlProps) {
    const [data, setData] = useState<UrlClickData[]>()
    const [dateRange, setDateRange] = useState<DateRange>({
        from: new Date(new Date().setDate(new Date().getDate() - 7)),
        to: new Date()
    })
    const [loading, setLoading] = useState(false);
    const { token } = useContextStore();

    //handel select data
    const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateRange(prev => ({
            ...prev,
            from: new Date(e.target.value)
        }))
    }

    const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateRange(prev => ({
            ...prev,
            to: new Date(e.target.value)
        }))
    }

    //function for get the anylisis data
    const fetchUrlAnalyticsofPersional = async () => {
        try {

            setLoading(true)
            const startDate = `${dateRange.from.toISOString().split("T")[0]}T00:00:00`;
            const endDate = `${dateRange.to.toISOString().split("T")[0]}T23:59:59`;
            console.log(startDate, endDate);

            const response = await axios.get<UrlClickData[]>(
                `${baseUrl}/urls/analytics/getCountOf/${shortUrl}`,
                {
                    params: { startDate, endDate },
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`, // Attach Bearer token
                    },
                }
            );


            // console.log(response.data)
            setData(response.data);
        } catch (error) {
            console.error("Error fetching analytics:", error);
            // Fallback data
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchUrlAnalyticsofPersional();
    },[open])

    // console.log(shortUrl)
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-amber-50 text-black w-100%">
                    <DialogHeader>
                        <DialogTitle>
                            <Link className="mr-2" /> URL Analytics Dashboard
                        </DialogTitle>
                        <DialogDescription>
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <label className="text-sm font-medium">From:</label>
                                        <input
                                            type="date"
                                            value={dateRange.from.toISOString().split('T')[0]}
                                            onChange={handleFromDateChange}
                                            className="border rounded px-2 py-1"
                                        />
                                        <label className="text-sm font-medium">To:</label>
                                        <input
                                            type="date"
                                            value={dateRange.to.toISOString().split('T')[0]}
                                            onChange={handleToDateChange}
                                            className="border rounded px-2 py-1"
                                        />
                                    </div>

                                </div>

                            </div>
                            <Button onClick={fetchUrlAnalyticsofPersional} className='cursor-pointer bg-purple-900 text-white'>
                                <Calendar className="mr-2" /> Fetch Analytics
                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                    {/* add the pai chart */}
                    <div className="mt-4 ">
                        {
                            loading ? (<Audio
                                height="80"
                                width="80"
                                color="#085759"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass="flex items-center justify-center"
                                visible={true}
                            />) : (data?.length === 0 ? (<div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 005.656 0M9 12a4 4 0 01-4-4V6h4M15 12a4 4 0 004 4v2h-4M15 12a4 4 0 00-4-4V8h4" />
                                    </svg>
                                    <h2 className="text-xl font-semibold text-gray-600 mb-2">No Data Available</h2>
                                    <p className="text-gray-500">There is currently no data to analyze.</p>
                                </div>
                            </div>) : (<div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Daily URL Clicks - Bar Chart</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ResponsiveContainer width="100%" height={250}>
                                            <BarChart data={data}>
                                                <XAxis dataKey="clickDate" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="count" fill="#085759" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>

                            </div>))
                        }
                    </div>


                </DialogContent>
            </Dialog>

        </div>
    )
}

export default PersonalAnalysisModal