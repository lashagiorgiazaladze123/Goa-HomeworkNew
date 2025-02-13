import random


def split_into_random_groups(items, num_groups, pairs=None):
    if num_groups <= 0 or num_groups > len(items):
        return "Invalid number of groups."

    if pairs:
        for pair in pairs:
            if len(pair) > 3:
                return "Each pair can have at most 3 items."
            if any(item not in items for item in pair):
                return "Pair items must be in the main list."

    random.shuffle(items)
    groups = [[] for _ in range(num_groups)]

    if pairs:
        paired_items = set()
        for pair in pairs:
            if all(item not in paired_items for item in pair):
                group_index = random.randint(0, num_groups - 1)
                while len(groups[group_index]) + len(pair) > 3:
                    group_index = random.randint(0, num_groups - 1)
                groups[group_index].extend(pair)
                paired_items.update(pair)

        remaining_items = [item for item in items if item not in paired_items]
    else:
        remaining_items = items

    for item in remaining_items:
        group_index = random.randint(0, num_groups - 1)
        while len(groups[group_index]) >= 3:
            group_index = random.randint(0, num_groups - 1)
        groups[group_index].append(item)

    return groups


def choose_leaders(groups):
    leaders = []
    for i, group in enumerate(groups):
        print(f"Group {i + 1}: {group}")
        leader = input(f"Choose a leader for Group {i + 1} ({', '.join(group)}): ").strip()
        while leader not in group:
            print("Invalid choice. Please choose a member from the group.")
            leader = input(f"Choose a leader for Group {i + 1} ({', '.join(group)}): ").strip()
        leaders.append(leader)
    return leaders


items = input("Enter items (comma-separated): ").split(',')
num_groups = int(input("Enter number of groups: "))
pairs_input = input("Enter pairs to stay together (e.g., A&B,C&D) or leave blank: ")

pairs = [pair.split('&') for pair in pairs_input.split(',')] if pairs_input else None

result = split_into_random_groups(items, num_groups, pairs)

if isinstance(result, list):
    groups = result
    leaders = choose_leaders(groups)
    for i, (group, leader) in enumerate(zip(groups, leaders)):
        print(f"Group {i + 1}: {group} | Leader: {leader}")
else:
    print(result)