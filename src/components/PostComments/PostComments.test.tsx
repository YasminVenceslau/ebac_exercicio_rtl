import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";



describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test('Deve adicionar 2 comentários', () => {

    render(<PostComment />)

    const textarea = screen.getByTestId('text-coment')
    const botao = screen.getByTestId('btn-coments')

    fireEvent.change(textarea, { target: { value: 'Primeiro Comentário'}})
    fireEvent.click(botao)

    fireEvent.change(textarea, { target: { value: 'Segundo Comentário'}})
    fireEvent.click(botao)

    const comentario = screen.getAllByTestId('post-coment')
    expect(comentario.length).toBe(2)
    expect(comentario[0]).toHaveTextContent('Primeiro Comentário')
    expect(comentario[1]).toHaveTextContent('Segundo Comentário')


  })

});
