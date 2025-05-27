import CommentSection from "@/components/comment-section";
import { AuthProvider } from "@/context/auth-context";
import { Comment } from "@/types";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, vi, it } from "vitest";

const mockComments: Comment[] = [
    {
        id: "comment-1",
        movieId: "movie-1",
        userId: "user-1",
        username: "johndoe",
        text: "Filme muito legal",
        date: "2023-01-15T12:30:00Z"
    },
    {
        id: "comment-2",
        movieId: "movie-1",
        userId: "user-2",
        username: "janedoe",
        text: "The visual effects are amazing. Christopher Nolan is a genius!",
        date: "2023-02-20T15:45:00Z",
    },
]

// Um mock dinâmico para o contexto de autenticação
vi.mock("@/context/auth-context", () => ({
    useAuth: () => ({
        user: { id: "user-3", username: "joao" },
    })
}))

describe("Comments section integration", () => {
    // Cria uma função mock que simula o comportamento da função original
    const mockOnAddComment = vi.fn()

    it("should render the comments section with items", async () => {
        // Renderiza o componente na tela
        render(<CommentSection comments={mockComments} onAddComment={mockOnAddComment} />)

        // Espera que este texto esteja na tela
        expect(screen.getByText('Filme muito legal')).toBeInTheDocument()
        expect(screen.getByText('The visual effects are amazing. Christopher Nolan is a genius!')).toBeInTheDocument()
    
        // Espera que existam 2 comentários com o texto "about 2 years ago"
        expect(screen.getAllByText('over 2 years ago')).toHaveLength(2)
    })

    it("should add a new comment when the form is submitted", () => {
        const CommentSectionWrapper = () => {
            // hooks do React devem estar envoltos em um componente
            const [comments, setComments] = useState<Comment[]>(mockComments)

            const handleNewComment = (text: string) => {
                const newComment: Comment = {
                    id: `comment-${comments.length + 1}`,
                    movieId: "movie-1",
                    userId: "user-3",
                    username: "joao",
                    text,
                    date: new Date().toISOString(),
                }
            
                setComments([...comments, newComment])
            }

            return (<CommentSection comments={comments} onAddComment={handleNewComment} />)
        }
        

        render(<CommentSectionWrapper />)

        const commentTextArea = screen.getByPlaceholderText('Add a comment...')
        const submitButton = screen.getByText('Post Comment')
        const newCommentText = "Muito bom!"

        fireEvent.change(commentTextArea, { target: { value: newCommentText } })
        fireEvent.click(submitButton)
        
        expect(screen.getByText(newCommentText)).toBeInTheDocument()
        expect(screen.getByText('joao')).toBeInTheDocument()
        expect(screen.getByText('less than a minute ago')).toBeInTheDocument
    })
})