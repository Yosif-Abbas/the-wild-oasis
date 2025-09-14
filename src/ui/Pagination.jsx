import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { PAGE_SIZE } from '../utils/constants';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? ' var(--color-brand-600)' : 'var(--color-grey-50)'};
  color: ${(props) => (props.active ? ' var(--color-brand-50)' : 'inherit')};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;

  function handlePrevious() {
    if (page > 1) {
      const prev = page === 1 ? page : +page - 1;
      searchParams.set('page', prev);
      setSearchParams(searchParams);
    }
  }

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handleNext() {
    if (page < pageCount) {
      const next = page === pageCount ? page : +page + 1;

      searchParams.set('page', next);
      setSearchParams(searchParams);
    }
  }

  if (pageCount < 2) return;

  return (
    <StyledPagination>
      <P>
        Showing <span>{page === 1 ? 1 : PAGE_SIZE * (page - 1) + 1}</span>
        {' to '}
        <span>{PAGE_SIZE * page > count ? count : PAGE_SIZE * page}</span> out
        of <span>{count}</span>
      </P>
      <Buttons>
        <PaginationButton disabled={+page === 1} onClick={handlePrevious}>
          Previous
        </PaginationButton>
        <PaginationButton disabled={+page === pageCount} onClick={handleNext}>
          Next
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

Pagination.propTypes = {
  count: Proptypes.number,
};

export default Pagination;
