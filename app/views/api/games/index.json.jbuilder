json.games do
  json.array! @games, partial: 'api/games/game', as: :game, tree: true
end
json.page @page
json.total_pages @total_pages
