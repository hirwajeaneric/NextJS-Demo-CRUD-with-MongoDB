import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const BlogsTable = () => {
    
    

    const blogs = [
        {
            _id: "usgfasjdf0uj4o3q3345ersaerqw",
            title: "Introduction to NodeJS",
            slug: "introduction-to-nodejs",
            photo: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et hendrerit turpis, eu mollis sapien. Quisque vestibulum felis vel ipsum rhoncus, vitae blandit elit mattis.t",
            body: "Cras sed nunc vitae massa varius efficitur. Duis tincidunt lacus suscipit faucibus mollis. Sed ultrices, ligula non malesuada tempor, velit mi porta elit, id semper urna enim vitae lorem. Duis volutpat tempor felis in rutrum. Sed ultricies elit vitae mauris fermentum mollis. Integer imperdiet in tortor vitae lacinia. In eget orci in nisi eleifend eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur posere tincidunt magna, ac ullamcorper neque feugiat ut. Suspendisse nulla justo, ultrices quis eleifend ut, condimentum vitae neque. Morbi eu tincidunt diam, ut venenatis mauris. Nulla vestibulum felis id vestibulum gravida. Praesent laoreet congue mollis. Phasellus vitae felis aliquet, congue enim id, facilisis nibh.",
            author: "John Doe",
            createdAt: "2023-07-12 10:42 AM",
            status: "Draft",
        },
        {
            _id: "post123",
            title: "Mastering React: Building Interactive User Interfaces",
            slug: "mastering-react",
            photo: "https://example.com/react.jpg",
            description: "Dive deep into React, a popular JavaScript library for creating dynamic user interfaces.",
            body: "React is a declarative, component-based JavaScript library for building user interfaces. It's efficient and flexible, making it a great choice for web development. Learn about JSX, components, state, props, and more.",
            author: "Jane Smith",
            createdAt: "2023-11-05 14:30 PM",
            status: "Published"
        },
        {
            _id: "post456",
            title: "Python for Data Science: Unleash Your Data Potential",
            slug: "python-for-data-science",
            photo: "https://example.com/python-data-science.png",
            description: "Discover how Python can be used for data manipulation, analysis, and visualization.",
            body: "Python's simplicity and powerful libraries like NumPy, Pandas, and Matplotlib make it a go-to language for data scientists. Explore data cleaning, exploration, modeling, and machine learning.",
            author: "David Lee",
            createdAt: "2024-02-18 10:15 AM",
            status: "Published"
        },
        {
            _id: "post789",
            title: "Building Scalable APIs with Node.js and Express",
            slug: "node-js-express-apis",
            photo: "https://example.com/nodejs-express.svg",
            description: "Learn how to create RESTful APIs using Node.js and Express for efficient data management.",
            body: "Node.js and Express provide a robust foundation for building scalable APIs. Understand routing, middleware, error handling, and database integration.",
            author: "Emily Brown",
            createdAt: "2024-05-12 16:45 PM",
            status: "Published"
        },
        {
            _id: "post1011",
            title: "Frontend Development Best Practices: Creating Exceptional User Experiences",
            slug: "frontend-development-best-practices",
            photo: "https://example.com/frontend-best-practices.jpg",
            description: "Enhance your frontend development skills with essential tips and techniques for building high-quality user interfaces.",
            body: "Focus on performance optimization, accessibility, responsiveness, code maintainability, and user-centered design to create exceptional web experiences.",
            author: "Michael Johnson",
            createdAt: "2024-07-25 09:30 AM",
            status: "Published"
        },
        {
            _id: "post1213",
            title: "The Future of Web Development: Emerging Trends and Technologies",
            slug: "future-of-web-development",
            photo: "https://example.com/web-development-trends.png",
            description: "Stay ahead of the curve by exploring the latest advancements in web development.",
            body: "Discover exciting technologies like WebAssembly, Progressive Web Apps (PWAs), serverless architecture, and artificial intelligence (AI) transforming the web development landscape.",
            author: "Olivia Carter",
            createdAt: "2024-08-08 13:15 PM",
            status: "Published"
        }
    ];

    return (
        <Card x-chunk="dashboard-06-chunk-0" className="w-full">
            <CardHeader>
                <CardTitle>Manage your blogs here</CardTitle>
                <CardDescription>
                    Manage your blogs and view their sales performance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">
                                Author
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Created at
                            </TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blogs && blogs.map((blog, index) => (
                            <TableRow key={index}>
                                <TableCell className="hidden sm:table-cell">
                                    <Image
                                        src="https://shecancode-website-dev.vercel.app/blog-sm.jpg"
                                        alt="Blog name"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    {blog.title}
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">{blog.status}</Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {blog.author}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {new Date(blog.createdAt).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                            >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                </div>
            </CardFooter>
        </Card>
    )
}

export default BlogsTable