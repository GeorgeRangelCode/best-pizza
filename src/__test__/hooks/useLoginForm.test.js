import { renderHook, act } from "@testing-library/react-hooks";
import { useLoginForm } from "../../hooks/useLoginForm";

test("render hook useLoginForm", () => {
  const history = {
    push: jest.fn(),
  };
  const { result } = renderHook(() => useLoginForm({ history }));

  act(() => {
    const values = { email: "test@mail.com", password: "12345678" };
    result.current.onSubmit(values);
  });

  act(() => {
    const user = { email: "test@mail.com", password: "12345678" };
    result.current.searchUserAuth(user);
  });
});
