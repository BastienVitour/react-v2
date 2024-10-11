import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbProps from "./BreadcrumbProps";

test("Renders Breadcrumb", () => {
  const breadcrumbProps: BreadcrumbProps = {
    separator: "/",
  };

  const { container } = render(
    <Breadcrumb separator={breadcrumbProps.separator}>
      <a href="/">Home</a>,<a href="/test">test</a>,
    </Breadcrumb>
  );

  expect(container.firstChild?.firstChild).toHaveClass("breadcrumb-element");
});
