import { Comment } from "../Models/Comment";
import { convertDate } from "../helpers/converters";

function Comments(comments:Comment[]){
    return (
        <>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{comments.length}</h2>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Sort by
                    </button>
                </div>
                <input
                    className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md border p-2"
                    placeholder="Ajoutez un commentaire" />
                <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img className="aspect-square h-full w-full" alt="User profile" src="/placeholder.svg?height=40&amp;width=40" />
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">Y</span>
                    </span>
                        <div className="flex-1">
                        {comments ? (
                            comments.map((c: Comment) => (
                                <div >
                                    <p className="text-sm">@{c.Video_channel_Id.channel.firstname} {c.Video_channel_Id.channel.lastname} il y a {convertDate(c.datePosting)}</p>
                                    <p>{c.content}</p>
                                </div>
                            ))
                        ) : (
                            <div>aucun comment</div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments;