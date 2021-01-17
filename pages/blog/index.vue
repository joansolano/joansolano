<script>
export default {
    middleware({ redirect }) {
        return redirect("301", "/blog/posts/1")
    }
}
</script>
