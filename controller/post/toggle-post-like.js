import { postModel } from "../../schema/post.schema.js"

export const togglePostLike = async (req, res) => {
    const user = req.user

    const params = req.params
    const postId = params.postId

    const post = await postModel.findById(postId)
    console.log(post, 'post')
    const postLike = post.likes
    console.log(postLike, "postLike");
    const isLiked = await postLike.includes(user._id)
    console.log(isLiked, "isLiked");

    if (isLiked) {
       await postModel.findByIdAndUpdate(postId, {
            likes: postLike.filter((likes) => likes != user._id)
        })
    } else {
        await postModel.findByIdAndUpdate(postId, {
            likes: [...postLike, user._id]
        })
    }

    res.statua(200).json({message: 'success'})
}