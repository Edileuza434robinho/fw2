export default function Page() {
    const router = useRouter()
    return <p>Post: {router.query.id}</p>
  }
  